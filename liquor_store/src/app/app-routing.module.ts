import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottlesComponent } from './bottles/bottles.component';
import { DistributorsComponent } from './distributors/distributors.component';

const routes: Routes = [
  {
    path: 'distributor/:id',
    component: DistributorsComponent
  },
  {
    path: 'bottles',
    component: BottlesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
