import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FitnessPlanData} from "../model/model";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class FitnessPlanService {

  private apiUrl: string = environment.apiBaseUrl + "/api/fitness-plan";
  private fitnessPlanSubject: BehaviorSubject<FitnessPlanData> = new BehaviorSubject<FitnessPlanData>({} as FitnessPlanData);
  private fitnessPlan: Observable<FitnessPlanData> = this.fitnessPlanSubject.asObservable();
  public get getFitnessPlan(): Observable<FitnessPlanData> {
    return this.fitnessPlan;
  }
  public set fitnessPlanData(_workout: FitnessPlanData) {
    this.fitnessPlanSubject.next(_workout);
  }

  constructor(
    private http: HttpClient
  ) {
  }

  public getAll<T = FitnessPlanData[]>(): Observable<T> {
    return this.http.get<T>(this.apiUrl + "/get-all");
  }

  public create<T = FitnessPlanData>(fitnessPlan: FitnessPlanData): Observable<T> {
    return this.http.post<T>(this.apiUrl + "/create", fitnessPlan);
  }

  public update<T = FitnessPlanData>(fitnessPlan: FitnessPlanData): Observable<T> {
    return this.http.put<T>(this.apiUrl + "/update", fitnessPlan);
  }

  public delete<T = boolean>(id: number): Observable<T> {
    return this.http.delete<T>(this.apiUrl + "/delete?id=" + id);
  }
}
