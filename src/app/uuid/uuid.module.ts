import { UuidService } from './uuid.service';
import { UuidComponent } from './uuid.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    UuidComponent
  ],
  exports: [ UuidComponent ]
})
export class UuidModule {}