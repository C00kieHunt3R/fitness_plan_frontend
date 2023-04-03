import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TrainingDayData} from "../model/model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class TrainingDayService {

  private apiUrl: string = environment.apiBaseUrl + "/training-day"
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

}
