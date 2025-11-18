import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarPlayerComponent } from './layout/topbar-player/topbar-player.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent,
    TopbarPlayerComponent,
    SearchResultsComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // 🔹 Referencia al componente de resultados de búsqueda
  @ViewChild(SearchResultsComponent)
  searchResults!: SearchResultsComponent;

  // 🔹 Esta función recibe el texto del buscador (sidebar)
  onSearch(query: string) {
    console.log('🔍 Recibido desde Sidebar:', query);
    if (this.searchResults) {
      this.searchResults.onSearch(query); // llama al método del otro componente
    } else {
      console.warn('⚠️ searchResults no está inicializado aún');
    }
  }
}
