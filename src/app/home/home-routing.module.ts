import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
// import { CanEditGuard } from '../auth/can-edit.guard';

const routes: Routes = [{ 
  path: '', 
  component: HomeComponent
  // canActivate:[CanEditGuard]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
