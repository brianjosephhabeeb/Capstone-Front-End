import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SpiritsComponent } from './spirits/spirits.component';
import { HoursComponent } from './hours/hours.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SpiritsComponent,
    HoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
