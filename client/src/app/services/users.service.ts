import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { UserModel } from "../models/user.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  private apiUrl = "http://localhost:8080/api";
  private token: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/users/login`, { email, password })
      .pipe(
        map((response) => {
          if (response && response.token) {
            this.token = response.token;
            localStorage.setItem("token", response.token);
            this.router.navigate(["/admin-page/profile"]);
          }
          return response;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    const message = error.error.errorMessage;
    return throwError(message);
  }

  logout() {
    this.token = null;
    localStorage.removeItem("token");
  }

  getAll(): Observable<UserModel[]> {
    return this.http
      .get<UserModel[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  getById(id: string): Observable<UserModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<UserModel>(url).pipe(catchError(this.handleError));
  }

  create(user: UserModel): Observable<UserModel> {
    return this.http
      .post<UserModel>(this.apiUrl, user)
      .pipe(catchError(this.handleError));
  }

  update(id: string, user: UserModel): Observable<UserModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .put<UserModel>(url, user)
      .pipe(catchError(this.handleError));
  }

  delete(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url).pipe(catchError(this.handleError));
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
