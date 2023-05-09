export class UserModel {
  _id: string;
  firstName: String;
  lastName: String;
  email: String;
  password: String;

  constructor(
    _id: string,
    firstName: String,
    lastName: String,
    email: String,
    password: String
  ) {
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}
