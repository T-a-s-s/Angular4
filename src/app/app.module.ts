import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CorretorModule } from './corretor/corretor.module';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CorretorModule,
    routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
