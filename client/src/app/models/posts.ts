export class Post {
  _id: string;
  name: string;
  title: string;
  text: string;
  photo: string;
  likes: number;
  static likes: number;

  constructor(
    _id: string,
    name: string,
    title: string,
    text: string,
    photo: string,
    likes: number
  ) {
    this._id = _id;
    this.name = name;
    this.title = title;
    this.text = text;
    this.photo = photo;
    this.likes = likes;
  }
}
