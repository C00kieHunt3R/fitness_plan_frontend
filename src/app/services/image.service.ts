import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ImageService {
  private apiUrl: string = environment.apiBaseUrl + "/api/images";
  constructor(
    private http: HttpClient
  ) {
  }
  public getAll<T = string[]>(): Observable<T> {
    return this.http.get<T>(this.apiUrl + "/get-all");
  }
}
