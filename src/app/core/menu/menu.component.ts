import { Component, OnInit } from '@angular/core';
import { MenuInterface } from './menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements  OnInit {
  menus!: { icon: string, name: string }[] & MenuInterface[];

  ngOnInit(): void{

     this.menus = [
      {
        "icon": "material-symbols-rounded",
        "name": "menu"
      },
      {
        "icon": "material-symbols-rounded",
        "name": "search"
      },
      {
        "icon": "material-symbols-outlined",
        "name": "other_houses"
      },
      {
        "icon": "material-symbols-rounded",
        "name": "star"

      },

      {
        "icon": "material-symbols-outlined",
        "name": "sms"
      },
      {
        "icon": "material-symbols-outlined",
        "name": "tune"
      },
      {
        "icon": "material-symbols-outlined",
        "name": "account_balance"
      },
    ];
  }

}
