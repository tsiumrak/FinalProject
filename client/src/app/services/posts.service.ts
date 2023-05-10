import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/posts";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  getPostById(selectedPostId: string | undefined): Post | undefined {
    throw new Error("Method not implemented.");
  }
  API_URL = "http://localhost:8080/api/posts";

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get(this.API_URL) as Observable<Post[]>;
  }

  getOnePost(_id: string): Observable<Post> {
    return this.http.get(`${this.API_URL}/${_id}`) as Observable<Post>;
  }
}
