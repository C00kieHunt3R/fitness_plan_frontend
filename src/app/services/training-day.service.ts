import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TrainingDayData} from "../model/model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class TrainingDayService {

  private apiUrl: string = environment.apiBaseUrl + "/api/training-day"
  constructor(
    private http: HttpClient
  ) {
  }

  public getAll<T = TrainingDayData[]>(): Observable<T> {
    return this.http.get<T>(this.apiUrl + "/get-all");
  }

  public getAllById<T = TrainingDayData[]>(identifiers: number[]): Observable<T> {
    return this.http.get<T>(this.apiUrl + "/get-list?id=" + identifiers.join(','));
  }

  public create<T = TrainingDayData>(day: TrainingDayData): Observable<T> {
    return this.http.post<T>(this.apiUrl + "/create", day);
  }

  public update<T = TrainingDayData>(day: TrainingDayData): Observable<T> {
    return this.http.put<T>(this.apiUrl + "/update", day);
  }

  public saveAll<T = TrainingDayData[]>(days: TrainingDayData[]): Observable<T> {
    return this.http.post<T>(this.apiUrl + "/save-all", days);
  }

  public delete<T = boolean>(id: number): Observable<T> {
    return this.http.delete<T>(this.apiUrl + "/delete?id=" + id);
  }

}
