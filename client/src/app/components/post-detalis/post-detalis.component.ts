import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Post } from "src/app/models/posts";
import { PostsService } from "src/app/services/posts.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-post-detalis",
  templateUrl: "./post-detalis.component.html",
  styleUrls: ["./post-detalis.component.css"],
})
export class PostDetalisComponent implements OnInit {
  post!: Post;
  posts: Post[] = [];
  selectedPostId: string | undefined;
  selectedPost: Post | undefined;
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get("id")!;
      this.selectedPostId = id;
      this.postsService.getOnePost(id).subscribe((post: Post) => {
        this.post = post;
      });
    });
    this.postsService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  back() {
    this.location.back();
  }

  postDetalis(postId: string): void {
    this.selectedPostId = postId;
  }

  onePost(postId: string): void {
    this.router.navigate(["/content-page/detalis", postId]);
  }
}
