 import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private baseUrl = 'https://api.spotify.com/v1';
  private proxyUrl = 'http://localhost:3001/token';

  constructor(private http: HttpClient) {}

  // 🔹 Obtener token del proxy
  private getToken(): Observable<string> {
    return this.http.get<any>(this.proxyUrl).pipe(
      switchMap(data => from([data.access_token]))
    );
  }

  // 🔹 Búsqueda general (track, artista, álbum)
  search(query: string): Observable<any> {
    return this.getToken().pipe(
      switchMap(token => {
        const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
        const params = { q: query, type: 'track,artist,album', limit: '8' };
        return this.http.get(`${this.baseUrl}/search`, { headers, params });
      })
    );
  }

  // 🔹 Info de artista
  getArtist(id: string): Observable<any> {
    return this.getToken().pipe(
      switchMap(token => {
        const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
        return this.http.get(`${this.baseUrl}/artists/${id}`, { headers });
      })
    );
  }

  // 🔹 Canciones más populares del artista
  getArtistTopTracks(id: string): Observable<any> {
    return this.getToken().pipe(
      switchMap(token => {
        const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
        return this.http.get(`${this.baseUrl}/artists/${id}/top-tracks?market=US`, { headers });
      })
    );
  }

  // 🔹 Álbumes del artista
  getArtistAlbums(id: string): Observable<any> {
    return this.getToken().pipe(
      switchMap(token => {
        const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
        return this.http.get(`${this.baseUrl}/artists/${id}/albums?include_groups=album,single&market=US`, { headers });
      })
    );
  }
}
