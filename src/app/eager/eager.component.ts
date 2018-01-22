import { UuidService } from './../uuid/uuid.service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'eager',
  template: `
    <div>
      <h2>Eager</h2>
      <p>Global: {{ globalUuidService.uuid }}</p>
      <p>Local: {{ localUuidService.uuid }}</p>
      <app-uuid></app-uuid>
    </div>
  `
})
export class EagerComponent {
  constructor(
    @Inject('globalUuidService') public globalUuidService: UuidService,
    @Inject('localUuidService') public localUuidService: UuidService
  ) {}
}

