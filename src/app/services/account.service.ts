import {HttpClient} from "@angular/common/http";
import {UserAccountData} from "../model/model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";

@Injectable()
export class AccountService{
  private apiUrl: string = environment.apiBaseUrl + "/api/user";
  constructor(
    private http: HttpClient
  ) {
  }

  public getById<T = UserAccountData>(id: number): Observable<T>{
    return this.http.get<T>(this.apiUrl + "/get?id=" + id);
  }

  public update<T = UserAccountData>(user: UserAccountData): Observable<T> {
    return this.http.get<T>(this.apiUrl + "/update");
  }
}
