import { UuidService } from './../uuid/uuid.service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'lazy',
  template: `
    <div>
      <h2>Lazy</h2>
      <p>Global: {{ globalUuidService.uuid }}</p>
      <p>Local: {{ localUuidService.uuid }}</p>
    </div>
  `
})
export class LazyComponent {
  constructor(
    @Inject('globalUuidService') public globalUuidService: UuidService,
    @Inject('localUuidService') public localUuidService: UuidService
  ) {}
}
