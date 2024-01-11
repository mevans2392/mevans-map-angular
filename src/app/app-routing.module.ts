import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapDetailComponent } from './map-detail/map-detail.component';

const routes: Routes = [
  { path: '', component: MapDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
