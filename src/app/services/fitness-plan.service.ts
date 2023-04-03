import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FitnessPlanData} from "../model/model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class FitnessPlanService {

  private apiUrl: string = environment.apiBaseUrl + "/api/fitness-plan"

  constructor(
    private http: HttpClient
  ) {
  }

  public getAll<T = FitnessPlanData[]>(): Observable<T> {
    return this.http.get<T>(this.apiUrl + "/get-all");
  }

}
