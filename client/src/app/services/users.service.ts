import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { UserModel } from "../models/user.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  private apiUrl = "http://localhost:8080/api";
  private token: string | null = null;
  userSubject = new BehaviorSubject<UserModel | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/users/login`, { email, password })
      .pipe(
        tap((response) => {
          console.log(response);
          this.userSubject.next(response.user);
          localStorage.setItem("token", response.token);
        }),
        catchError((error) => {
          console.log(error);
          return throwError(error);
        })
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

  create(user: UserModel): Observable<UserModel> {
    return this.http
      .post<UserModel>(`${this.apiUrl}/users`, user)
      .pipe(catchError(this.handleError));
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
