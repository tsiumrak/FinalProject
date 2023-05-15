import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Post } from "src/app/models/posts";
import { PostsService } from "src/app/services/posts.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostsService, private router: Router) {}
  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
  EditingClick(_id: string) {
    this.router.navigate(["/admin-page/editing", _id]);
  }
  newPost() {
    this.router.navigate(["/admin-page/new-post"]);
  }
}
