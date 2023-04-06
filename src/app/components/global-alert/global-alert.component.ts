import { Component } from '@angular/core';
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-global-alert',
  templateUrl: './global-alert.component.html',
  styleUrls: ['./global-alert.component.scss']
})
export class GlobalAlertComponent {
  constructor(public alertService: AlertService) {}

  onClose(value: any): void {
    this.alertService.onClose(value);
  }
}
