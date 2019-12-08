import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent  {

    isCollapse = true;
    toggleState() {
      let foo = this.isCollapse
      this.isCollapse = foo === false ? true : false;
    }


}
