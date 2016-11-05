import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { CaissePage } from '../pages/caisse/caisse';

var pages = [
  MyApp,
  AboutPage,
  ContactPage,
  HomePage,
  CaissePage
];

import {SidebarMenu} from "./widgets/sidebar-menu";

var widgets = [
  SidebarMenu
];

@NgModule({
  declarations: [
    ...pages,
    ...widgets
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ...pages
  ]
})
export class AppModule {}
