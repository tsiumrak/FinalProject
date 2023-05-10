import { Component } from "@angular/core";
import { LikesService } from "src/app/services/LikesService.service";

@Component({
  selector: "app-like",
  templateUrl: "./like.component.html",
  styleUrls: ["./like.component.css"],
})
export class LikeComponent {
  clicked = false;
  likesCount = 0;

  constructor(private likesService: LikesService) {}

  addLike(postId: number) {
    const likes = this.likesService.getLikes(postId) || 0;
    this.likesService.saveLikes({
      ...this.likesService.postLikes,
      [postId]: likes + 1,
    });
  }

  likeClick() {
    this.clicked = true;
    this.likesCount++;
  }
}
