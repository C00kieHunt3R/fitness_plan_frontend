import { Component } from '@angular/core';
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fitness_plan_frontend';
  constructor() {
    registerLocaleData(localeRu)
  }
}
