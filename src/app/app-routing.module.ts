import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LeadsComponent } from './leads/leads.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'leads', component: LeadsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
