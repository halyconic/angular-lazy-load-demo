import { UuidService } from './uuid.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-uuid',
  template: `
    <p class="component">Component: {{ uuid }}</p>
  `
})
export class UuidComponent {
  private _uuid = new UuidService().uuid;

  get uuid(): string {
    return this._uuid;
  }
}