import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
export enum AlertType {
  INFO = "info",
  WARNING = "warning",
  SUCCESS = "success",
  DANGER = "danger"
}

export interface AlertConfig {
  clrAlertType: AlertType,
  message: string;
  clrAlertAppLevel: boolean;
  clrAlertClosable: boolean;
}
@Injectable()
export class AlertService {
  shouldShowAlert: boolean = false;
  alertConfig: AlertConfig = {
    clrAlertType: AlertType.INFO,
    message: "",
    clrAlertAppLevel: false,
    clrAlertClosable: true
  };
  close = new Subject<any>();

  constructor() { }

  show(config: AlertConfig): AlertService {
    this.shouldShowAlert = true;
    this.alertConfig = config;
    setTimeout(() => {
      this.shouldShowAlert = false;
    }, 3000);
    return this;
  }

  hide(): AlertService {
    this.shouldShowAlert = false;
    return this;
  }

  toggle(): AlertService {
    this.shouldShowAlert = !this.shouldShowAlert;
    return this;
  }

  onClose(value: any): any {
    this.hide();
    this.close.next(value);
  }

  onClose$(): any {
    return this.close;
  }
}
