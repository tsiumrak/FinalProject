// import { Component, OnInit } from "@angular/core";
// import { ActivatedRoute } from "@angular/router";
// import { Post } from "src/app/models/posts";
// import { PostsService } from "src/app/services/posts.service";
// import { Location } from "@angular/common";
// import { FormGroup, FormControl } from "@angular/forms";

// @Component({
//   selector: "app-editing-posts",
//   templateUrl: "./editing-posts.component.html",
//   styleUrls: ["./editing-posts.component.css"],
// })
// export class EditingPostsComponent implements OnInit {
//   post!: Post;
//   selectedPostId: string | undefined;
//   updatedPost = {
//     name: "",
//     title: "",
//     text: "",
//     photo: "",
//   };
//   registerForm: FormGroup = new FormGroup({}); // ініціалізуємо registerForm

//   constructor(
//     private postsService: PostsService,
//     private route: ActivatedRoute,
//     private location: Location
//   ) {}

//   ngOnInit(): void {
//     this.registerForm = new FormGroup({
//       name: new FormControl(),
//       title: new FormControl(),
//       text: new FormControl(),
//       photo: new FormControl(),
//     });

//     this.route.paramMap.subscribe((params) => {
//       let id = params.get("id")!;
//       this.selectedPostId = id;
//       this.postsService.getOnePost(id).subscribe((post: Post) => {
//         this.post = post;
//       });
//     });
//   }

//   onSubmit(): void {
//     if (this.selectedPostId) {
//       this.postsService
//         .updateData(this.selectedPostId, this.updatedPost)
//         .subscribe((post: Post) => {
//           this.post = post;
//         });
//     }
//   }

//   back() {
//     this.location.back();
//   }
// }

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Post } from "src/app/models/posts";
import { PostsService } from "src/app/services/posts.service";
import { Location } from "@angular/common";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-editing-posts",
  templateUrl: "./editing-posts.component.html",
  styleUrls: ["./editing-posts.component.css"],
})
export class EditingPostsComponent implements OnInit {
  post!: Post;
  selectedPostId: string | undefined;
  registerForm!: FormGroup;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(),
      title: new FormControl(),
      text: new FormControl(),
      photo: new FormControl(),
    });

    this.route.paramMap.subscribe((params) => {
      let id = params.get("id")!;
      this.selectedPostId = id;
      this.postsService.getOnePost(id).subscribe((post: Post) => {
        this.post = post;
        this.registerForm.patchValue({
          name: this.post.name,
          title: this.post.title,
          text: this.post.text,
          photo: this.post.photo,
        });
      });
    });
  }

  onSubmit(): void {
    if (this.selectedPostId) {
      const updatedPost = {
        name: this.registerForm.value.name,
        title: this.registerForm.value.title,
        text: this.registerForm.value.text,
        photo: this.registerForm.value.photo,
      };
      this.postsService
        .updateData(this.selectedPostId, updatedPost)
        .subscribe((post: Post) => {
          this.post = post;
          console.log(post);
        });
    }
  }

  back() {
    this.location.back();
  }
}
