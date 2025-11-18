import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar-player',
  standalone: true,
  templateUrl: './topbar-player.component.html',
  styleUrls: ['./topbar-player.component.css']
})
export class TopbarPlayerComponent {
  isPlaying = false;

  togglePlay() {
    this.isPlaying = !this.isPlaying;
  }
}
