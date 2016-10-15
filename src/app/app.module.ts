import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import {CaissePage } from '../pages/caisse/caisse';
import { TabsPage } from '../pages/tabs/tabs';

var pages = [
  MyApp,
  AboutPage,
  ContactPage,
  CaissePage,
  TabsPage
]

@NgModule({
  declarations: [
    ...pages
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ...pages
  ],
  providers: []
})
export class AppModule {}
