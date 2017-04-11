import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DropWindowComponent } from '../app/components/drop-window/drop-window.component';

import { AppService } from './app.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule],
  declarations: [
    AppComponent,
    DropWindowComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
