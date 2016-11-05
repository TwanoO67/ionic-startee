import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { CaissePage } from '../pages/caisse/caisse';

const routes: Routes = [
  { path: "", component: HomePage},
  { path: "about", component: AboutPage},
  { path: "contact", component: ContactPage},
  { path: "caisse", component: CaissePage},
  { path: "**", component: HomePage},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
