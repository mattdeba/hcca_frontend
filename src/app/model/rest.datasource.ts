import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { map, Observable } from "rxjs";
const PROTOCOL = "http";
const PORT = 3000;
@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token?: string;
  httpOptions: object;
  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http
      .post<any>(this.baseUrl + "authentication/sign-in", {
      email: user, password: pass
    }, this.httpOptions).pipe(map(response => {
      this.auth_token = response.accessToken ? response.accessToken : null;
      return true;
    }));
  }
}
