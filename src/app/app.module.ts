

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //importamos formularios
    FormsModule,
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    
  ]
})
export class AppModule { }
