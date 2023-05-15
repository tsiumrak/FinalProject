import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";
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
  updateData(_id: string, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${_id}`, updatedData).pipe(
      catchError((error: any) => {
        console.error("Сталася помилка при оновленні даних:", error);
        throw error;
      })
    );
  }
  createPost(newPost: any): Observable<any> {
    return this.http.post<any>(this.API_URL, newPost).pipe(
      catchError((error: any) => {
        console.error("Сталася помилка при створенні нового поста:", error);
        throw error;
      })
    );
  }
}
