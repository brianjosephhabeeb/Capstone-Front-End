import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottlesComponent } from './bottles/bottles.component';
import { DistributorsComponent } from './distributors/distributors.component';

@NgModule({
  declarations: [
    AppComponent,
    BottlesComponent,
    DistributorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
