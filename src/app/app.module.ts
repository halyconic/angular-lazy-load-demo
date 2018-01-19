import { SharedModule } from './shared/shared.module';
import { UuidService } from './uuid/uuid.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// containers
import { AppComponent } from './app.component';
import { EagerComponent } from './eager/eager.component';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'eager' },
  { path: 'eager', component: EagerComponent },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
];

@NgModule({
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    SharedModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent,
    EagerComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
