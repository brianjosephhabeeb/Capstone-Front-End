import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LinksComponent } from './links/links.component';
import { OrdersComponent } from './orders/orders.component';
import { SpiritsComponent } from './spirits/spirits.component';

const routes: Routes = [
  {
    path: 'seasonalcocktails',
    component: CocktailsComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'links',
    component: LinksComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'spirits',
    component: SpiritsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
