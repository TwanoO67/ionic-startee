import { Component } from '@angular/core';
import { Router, NavigatedRoute } from "@angular/router";

@Component({
  selector: "sidebar-menu",
  template: `<ul class="sidebar-menu">
    <li class="header">NAVIGATION</li>
    <!-- Optionally, you can add icons to the links -->

    <template ngFor let-link [ngForOf]="links">
      <template [ngIf]="!link.sublinks">
        <li [routerLinkActive]="['active']" [routerLink]="link.page" ><a href="#"><i class="fa fa-{{link.icon}}"></i> <span>{{link.label}}</span></a></li>
      </template>
      <template [ngIf]="link.sublinks">
        <li class="treeview">
          <a href="#"><i class="fa fa-{{link.icon}}"></i> <span>{{link.label}}</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
              <template ngFor let-sublink [ngForOf]="link.sublinks">
                <li [routerLinkActive]="['active']" [routerLink]="sublink.page" ><a href="#">{{sublink.label}}</a></li>
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
    private _router: Router,
    //private _nav: NavigatedRoute
  ){
    this.links = [
      {
        "page": "",
        "label": "Accueil",
        "icon": "home",
        //"sublinks": []
      },
      {
        "page": "about",
        "label": "About",
        "icon": "home",
        //"sublinks": []
      },
      {
        "page": "contact",
        "label": "Contact",
        "icon": "home",
        //"sublinks": []
      },
      {
        "page": "caisse",
        "label": "Caisse",
        "icon": "home",
        //"sublinks": []
      }
    ];
  }


}
