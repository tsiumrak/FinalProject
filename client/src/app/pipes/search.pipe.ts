import { Pipe, PipeTransform } from "@angular/core";
import { Post } from "../models/posts";

@Pipe({
  name: "search",
})
export class SearchPipe implements PipeTransform {
  transform(post: Post[], search: string) {
    return post.filter((onePost: Post) => onePost.name.includes(search));
  }
}
