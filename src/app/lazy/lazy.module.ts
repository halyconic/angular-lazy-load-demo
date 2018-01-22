import { UuidModule } from './../uuid/uuid.module';
import { SharedModule } from './../shared/shared.module';
import { UuidService } from './../uuid/uuid.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { LazyComponent } from './lazy.component';

// routes
export const ROUTES: Routes = [
  { path: '', component: LazyComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
    UuidModule
  ],
  declarations: [
    LazyComponent
  ]
})
export class LazyModule {}