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
import { LinksComponent } from './links/links.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DistributorComponent } from './distributor/distributor.component';
import { BottlesComponent } from './bottles/bottles.component';

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
    OrdersComponent,
    LinksComponent,
    AboutComponent,
    HomeComponent,
    DistributorComponent,
    BottlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
