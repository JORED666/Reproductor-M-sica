import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  results: any = null;
  selectedTrack: any = null;
  audio = new Audio();

  constructor(private spotifyService: SpotifyService) {}

  onSearch(query: string) {
    this.spotifyService.search(query).subscribe({
      next: (data) => (this.results = data),
      error: (err) => console.error('Error en búsqueda:', err)
    });
  }

  openTrack(track: any) {
    this.selectedTrack = track;
  }

  closeTrack() {
    this.selectedTrack = null;
  }

  playPreview(url: string) {
    if (this.audio.src === url && !this.audio.paused) this.audio.pause();
    else {
      this.audio.src = url;
      this.audio.play();
    }
  }
}
