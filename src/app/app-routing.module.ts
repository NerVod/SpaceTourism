import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {path:"", pathMatch:"full", redirectTo: "home"},
  {path: "", component: HomeComponent},
  {path:"destination", component: DestinationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
