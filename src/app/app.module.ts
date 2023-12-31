import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './shared/example/example.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InitComponent } from './shared/init/init.component'
@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    InitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
