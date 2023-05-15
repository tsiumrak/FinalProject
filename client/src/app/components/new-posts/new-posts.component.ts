import { Component } from "@angular/core";
import { PostsService } from "src/app/services/posts.service";

@Component({
  selector: "app-new-posts",
  templateUrl: "./new-posts.component.html",
  styleUrls: ["./new-posts.component.css"],
})
export class NewPostsComponent {
  name: string = "";
  title: string = "";
  text: string = "";
  photo: string = "";

  constructor(private postsService: PostsService) {}

  createPost() {
    const postData = {
      name: this.name,
      title: this.title,
      text: this.text,
      photo: this.photo,
    };
    this.postsService.createPost(postData).subscribe(
      (result) => {
        console.log(result, postData);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
