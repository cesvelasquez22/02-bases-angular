import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {routes} from './app.routes';
import {MenuComponent} from './components/menu/menu.component';
import {PagesModule} from "./pages/pages.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [BrowserModule, HttpClientModule, PagesModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
