import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public success: boolean = true;
  // msg: any
  public message = "";

  form: any = {
    "loginId": "",
    "password": ""
  };

  inputError: any = {
    "loginId": "",
    "password": ""
  };

  clearError() {
    this.message = "",
      this.inputError = {
        "loginId": "",
        "password": ""
      };
  }
  constructor(private aroute: ActivatedRoute, private router: Router, private service: LoginService) { }


  ngOnInit(): void {

    localStorage.removeItem("loginId")
    // this.router.navigateByUrl("/logout")
    if (this.router.url == "/sessionOut") {
      this.success = false;
      this.form.message = localStorage.getItem("sess_msg");
    } else {
      let msg = localStorage.getItem("log_msg")
      if (msg != null || msg != "null") {
        this.success = true;

      }
    }


    var self = this;
    this.clearError();
    this.form.id = Number(this.aroute.snapshot.paramMap.get("id"));
    if (!isNaN(this.form.id) && this.form.id > 0) {
      this.service.get(this.form.id, function (res: any, error: any) {
        if (error) {
          alert("Error:" + error.message);
          return;
        }
        self.form = res.result.data;
      });
    }
  }


  login() {
    let self = this;
    self.clearError();
    self.service.authenticate(self.form, function (res: any, error: any) {
      if (error) {
        self.success = false;
        self.message = res.message;
        console.log(res.message)
        alert(res.message);
        return;
      }
      self.success = res.success;
      if
        (self.success == true) {
        alert("login successfully")
        self.message = res.message;
        self.inputError = {
          "loginId": "",
          "password": ""
        };
        localStorage.setItem("loginId", res.result.data.firstName);
        self.router.navigateByUrl('/navbar2');
      } else {
        self.message = "Invalid Id or Password";
        self.inputError = res.result.inputerror
      }
    });
  }
  getString(obj: any) {
    return JSON.stringify(obj);
  }
}
