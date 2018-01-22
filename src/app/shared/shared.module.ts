import { UuidService } from './../uuid/uuid.service';
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  providers: [{ provide: 'localUuidService', useClass: UuidService }]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [{ provide: 'globalUuidService', useClass: UuidService }]
    };
  }
}