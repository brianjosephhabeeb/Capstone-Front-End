import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LinksComponent } from './links/links.component';
import { OrdersComponent } from './orders/orders.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SpiritsComponent } from './spirits/spirits.component';

const routes: Routes = [
  {
    path: 'home',
    component: SlideshowComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
