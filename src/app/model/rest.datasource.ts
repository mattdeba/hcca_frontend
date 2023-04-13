import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
const PROTOCOL = "http";
const PORT = 3000;
@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token?: string;
  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }
  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + "authentication/sign-in", {
      name: user, password: pass
    }).pipe(map(response => {
      this.auth_token = response.success ? response.accessToken : null;
      return response.success;
    }));
  }
}
