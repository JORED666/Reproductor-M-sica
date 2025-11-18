import { Routes } from '@angular/router';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { ArtistDetailsComponent } from './pages/artist-details/artist-details.component';
import { AlbumComponent } from './pages/album/album.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';

export const routes: Routes = [
  { path: '', component: SearchResultsComponent },
  { path: 'artist/:id', component: ArtistDetailsComponent }, // ✅ solo esta versión
  { path: 'album/:id', component: AlbumComponent },
  { path: 'playlist/:id', component: PlaylistComponent },
  { path: '**', redirectTo: '' } // 🔹 siempre al final
];
