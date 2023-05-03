import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/models/posts";
import { PostsService } from "src/app/services/posts.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  searchPost: string = "";
  posts: Post[] = [];
  constructor(private postService: PostsService) {}
  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
}
