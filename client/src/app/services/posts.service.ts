import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/posts";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  API_URL = "http://localhost:8000/api/posts";

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get(this.API_URL) as Observable<Post[]>;
  }

  getOnePost(_id: string): Observable<Post> {
    return this.http.get(`${this.API_URL}/${_id}`) as Observable<Post>;
  }
}
