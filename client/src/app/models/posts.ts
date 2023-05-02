export class Post {
  _id: string;
  name: string;
  text: string;
  photo: string;

  constructor(_id: string, name: string, text: string, photo: string) {
    this._id = _id;
    this.name = name;
    this.text = text;
    this.photo = photo;
  }
}
