import {Component, OnInit} from '@angular/core';
import '@cds/core/icon/register.js'
import {IconService} from "../../services/icon.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  constructor(
    iconsService: IconService
  ) {
  }

}
