import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {NutritionData} from "../model/model";
import {Observable} from "rxjs";

@Injectable()
export class NutritionService {

  private apiUrl: string = environment.apiBaseUrl + "/api/nutrition";

  constructor(
    private http: HttpClient
  ) {
  }
  public getAll<T = NutritionData[]>(): Observable<T> {
    return this.http.get<T>(this.apiUrl + "/get-all");
  }

  public create<T = NutritionData>(nutrition: NutritionData): Observable<T> {
    return this.http.post<T>(this.apiUrl + "/create", nutrition);
  }

  public update<T = NutritionData>(nutrition: NutritionData): Observable<T> {
    return this.http.put<T>(this.apiUrl + "/update", nutrition);
  }

  public delete<T = boolean>(id: number): Observable<T> {
    return this.http.delete<T>(this.apiUrl + "/delete?id=" + id);
  }
}
