import { Component } from '@angular/core';
//import { NavController } from "ionic-angular";

import { HomePage } from "../../pages/home/home";

@Component({
  selector: "sidebar-menu",
  template: `<ul class="sidebar-menu">
    <li class="header">NAVIGATION</li>
    <!-- Optionally, you can add icons to the links -->

    <template ngFor let-link [ngForOf]="links">
      <template ngIf="!link.sublinks">
        <li [class.active]="_nav.isActive(link.page)"><a href="#" (click)="go(link.page)"><i class="fa fa-{{link.icon}}"></i> <span>{{link.label}}</span></a></li>
      </template>
      <template ngIf="link.sublinks">
        <li class="treeview">
          <a href="#"><i class="fa fa-{{link.icon}}"></i> <span>{{link.label}}</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
              <template ngFor let-sublink [ngForOf]="link.sublinks">
                <li><a href="#" (click)="go(sublink.page)">{{sublink.label}}</a></li>
              </template>
          </ul>
        </li>
      </template>
    </template>
  </ul>`
})
export class SidebarMenu {
  private links:any = null;
  private _nav = {
    isActive: function(page){
      return true;
    }
  }

  constructor(
    //private _nav: NavController
  ){
    this.links = [
      {
        "page": HomePage,
        "label": "Accueil",
        "icon": "home",
        //"sublinks": []
      }
    ];
  }

  public go(pages: any){
    //this._nav.push(pages);
  }


}
