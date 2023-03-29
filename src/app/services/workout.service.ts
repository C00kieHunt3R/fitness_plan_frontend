import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {WorkoutData} from "../model/model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class WorkoutService {
  private apiUrl: string = environment.apiBaseUrl + "/api/workout";
  constructor(
    private http: HttpClient
  ) {
  }
  public getAll<T = WorkoutData[]>(): Observable<T> {
    return this.http.get<T>(this.apiUrl + "/get-all");
  }

  public getById<T = WorkoutData>(id: number): Observable<T> {
    return this.http.get<T>(this.apiUrl + "/get?id=" + id);
  }

  public create<T = WorkoutData>(workout: T): Observable<T> {
    return this.http.post<T>(this.apiUrl + "/create", workout);
  }

  public update<T = WorkoutData>(workout: T): Observable<T> {
    return this.http.put<T>(this.apiUrl + "/update", workout);
  }
  public delete<T = boolean>(id: number): Observable<T> {
    return this.http.delete<T>(this.apiUrl + "/delete?id=" + id);
  }
}
