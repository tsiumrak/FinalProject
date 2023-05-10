import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsersService } from "../../services/users.service";
import { v4 as uuidv4 } from "uuid";
import { UserModel } from "src/app/models/user.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const user: UserModel = {
        _id: uuidv4(),
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      };
      this.usersService.create(user).subscribe((data) => {
        console.log(data);
        console.log(user);
        this.router.navigate(["/admin-page/login"]);
      });
    }
  }
}
