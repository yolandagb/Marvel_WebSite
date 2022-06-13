import { Component } from '@angular/core';
import { MenuElement } from '@core/interfaces/menu-element.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'claro';
  loading: boolean = false;
  menuElements: MenuElement[] = [
    { title: 'Catálogo', path: 'catalog' },
    { title: 'Colección', path: 'collection' },
  ];
  saludar() {
    console.log('Hola mundo');
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }
}
