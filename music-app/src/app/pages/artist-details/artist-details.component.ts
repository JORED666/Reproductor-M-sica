import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent {
  artist: any;
  topTracks: any[] = [];
  albums: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private spotify: SpotifyService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.spotify.getArtist(id).subscribe((data) => (this.artist = data));
      this.spotify.getArtistTopTracks(id).subscribe((data: any) => {
        this.topTracks = data.tracks;
      });
      this.spotify.getArtistAlbums(id).subscribe((data: any) => {
        this.albums = data.items;
      });
    }
  }
}
