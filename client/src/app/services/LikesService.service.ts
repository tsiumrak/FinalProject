import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LikesService {
  private likesKey = "likes";
  postLikes: { [postId: number]: number } = {};

  constructor(private http: HttpClient) {}

  getLikes(postId: number): number | null {
    const likes = JSON.parse(localStorage.getItem(this.likesKey) || "{}");
    return likes[postId] || null;
  }

  saveLikes(likes: { [postId: number]: number }): void {
    localStorage.setItem(this.likesKey, JSON.stringify(likes));
  }
}
