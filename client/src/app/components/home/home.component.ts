import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Post } from "src/app/models/posts";
import { PostsService } from "src/app/services/posts.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  time: string = new Date().toLocaleString();

  posts: Post[] = [];
  constructor(private postService: PostsService, private router: Router) {}
  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  postDetalis(_id: string): void {
    this.router.navigate(["/content-page/detalis", _id]);
  }
}
