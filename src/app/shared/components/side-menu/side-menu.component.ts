import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  showMenu: boolean | undefined;
  expandedMenu: boolean | undefined;

  constructor() {}

  ngOnInit(): void {}
  menuToggle() {
    var mediaquery = window.matchMedia('(max-width: 768px)');
    if (mediaquery.matches) {
      this.showMenu = !this.showMenu;

      // console.log(true);
    }
    // console.log(this.showMenu);
  }

  toggleLang() {
    // let newLang = this._AuthService.getCurrentculture() == 'ar' ? 'en' : 'ar';
    // this._AuthService.setCulture(newLang);
  }

  expandMenu() {
    this.expandedMenu = !this.expandedMenu;
  }
}
