import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  query: string = '';

  @Output() search = new EventEmitter<string>();

  onSearchChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.query = value;
    this.search.emit(this.query);
    console.log('🔎 Buscando:', value);
  }
}
