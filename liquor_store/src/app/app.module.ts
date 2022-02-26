import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SpiritsComponent } from './spirits/spirits.component';
import { HoursComponent } from './hours/hours.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SpiritsComponent,
    HoursComponent,
    SlideshowComponent,
    SidebarComponent,
    FavoritesComponent,
    NavbarComponent,
    HeaderComponent,
    CocktailsComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
