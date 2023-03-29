import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {GoalData} from "../model/model";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class GoalService{

  private apiUrl: string = environment.apiBaseUrl + "/api/goal";
  constructor(
    private http: HttpClient
  ) {

  }

  public getAll<T = GoalData[]>(): Observable<T> {
    return this.http.get<T>(this.apiUrl + "/get-all");
  }

  public create<T = GoalData>(goal: GoalData): Observable<T> {
    return this.http.post<T>(this.apiUrl + "/create", goal);
  }

  public update<T = GoalData>(goal: GoalData): Observable<T> {
    return this.http.put<T>(this.apiUrl + "/update", goal);
  }

  public delete<T = boolean>(id: number): Observable<T> {
     return this.http.delete<T>(this.apiUrl + "/delete?id=" + id);
  }
}
