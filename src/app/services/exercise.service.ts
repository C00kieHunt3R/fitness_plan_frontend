import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ExerciseData, WorkoutData} from "../model/model";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class ExerciseService {
  private apiUrl: string = environment.apiBaseUrl + "/api/exercise";
  private exerciseSubject: BehaviorSubject<ExerciseData> = new BehaviorSubject<ExerciseData>({} as ExerciseData);
  private exercise: Observable<ExerciseData> = this.exerciseSubject.asObservable();
  public get getExercise(): Observable<ExerciseData> {
    return this.exercise;
  }
  public set exerciseData(_exercise: ExerciseData) {
    this.exerciseSubject.next(_exercise);
  }
  constructor(
    private http: HttpClient
  ) {
  }


  public getAll<T = ExerciseData[]>(): Observable<T> {
    return this.http.get<T>(this.apiUrl + "/get-all");
  }

  public getAllById<T = ExerciseData[]>(identifiers: number[]): Observable<T> {
    return this.http.get<T>(this.apiUrl + "/get-list?id=" + identifiers.join(','));
  }

  public getAllByIdNot<T = ExerciseData[]>(identifiers: number[]): Observable<T> {
    return this.http.get<T>(this.apiUrl + "/get-list-not?id=" + identifiers.join(','));
  }

  public delete<T = boolean>(id: number): Observable<T> {
    return this.http.delete<T>(this.apiUrl + "/delete?id=" + id);
  }

  public create<T = ExerciseData>(exercise: ExerciseData): Observable<T> {
    return this.http.post<T>(this.apiUrl + "/create", exercise);
  }

  public update<T = ExerciseData>(exercise: ExerciseData): Observable<T> {
    return this.http.put<T>(this.apiUrl + "/update", exercise);
  }

}
