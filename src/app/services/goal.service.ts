import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {GoalData} from "../model/model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpService} from "./http.service";

@Injectable()
export class GoalService extends HttpService{

  constructor(
    private http: HttpClient
  ) {
    super();
    this.request='/goal';
  }

  public getAll<T = GoalData[]>(): Observable<T> {
    return this.http.get<T>(this.url + "/get-all");
  }

  public create<T = GoalData>(goal: GoalData): Observable<T> {
    return this.http.get<T>(this.url + "/create");
  }
}
