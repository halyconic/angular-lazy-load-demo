import { UuidService } from './../uuid/uuid.service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'lazy',
  template: `
    <div>
      <h2>Lazy</h2>
      <p class="global">Global: {{ globalUuidService.uuid }}</p>
      <p class="local">Local: {{ localUuidService.uuid }}</p>
      <app-uuid></app-uuid>
    </div>
  `
})
export class LazyComponent {
  constructor(
    @Inject('globalUuidService') public globalUuidService: UuidService,
    @Inject('localUuidService') public localUuidService: UuidService
  ) {}
}
