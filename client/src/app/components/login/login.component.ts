import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { UsersService } from "../../services/users.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });

    this.loginForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log("zzzz", email, password);
      this.usersService.login(email, password).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(["/admin-page/profile"]);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    return false;
  }

  newMember() {
    console.log("register clicked");
    this.router.navigate(["/admin-page/register"]);
  }
}
