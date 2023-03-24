import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

export class HttpService {
  public url = environment.apiBaseUrl + '/api';
  protected request: string = '';

  constructor() {
    this.url += this.request;
  }
}
