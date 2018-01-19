import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Lazy loading demo</h1>
      <nav class="app-nav">
        <div class="wrapper">
          <a routerLink="eager" routerLinkActive="eager">Eager</a>
          <a routerLink="lazy" routerLinkActive="lazy">Lazy</a>
        </div>
      </nav>
      <div class="wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {}
