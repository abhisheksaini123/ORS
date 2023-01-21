import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})


export class Navbar2Component implements OnInit {
  form: any;
  msg: any;
  fname: any;

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    
    this.SessionOut();
    // this.logout()
  }
  getUser() {
    let user: any = "Guest";
    if (localStorage.getItem("loginId")) {
      user = localStorage.getItem("loginId");
    }
    return user;
  }

  isLogin() {
    let check = localStorage.getItem("loginId");
    if (check != "null" && check != null) {
      this.fname = localStorage.getItem("loginId");
      // this.fname,
      this.fname = localStorage.getItem("loginId");
      // localStorage.setItem("log_msg", "You have Logged in Successfully");
      return true;
    } else {
      return false;
    }
  }

  SessionOut() {
    let loginId = localStorage.getItem("loginId")
    //console.log("logout out path--->", this.location.path())
    //console.log("is session out method-->loginId--", loginId)
    if ((loginId == "null" || loginId == null) && (this.location.path() != "" && this.location.path() != "/login" &&
      this.location.path() != "/sessionOut" && this.location.path() != "/logout" && this.location.path() != "/registration"
    )) {
      localStorage.clear();
      this.msg = "OOPS! YOURS SESSION IS EXPIRED";
      localStorage.setItem("sess_msg", this.msg);
      this.router.navigateByUrl("/sessionOut");
      console.log(this.msg);
      alert(this.msg);
      return true;
    } else {
      return false;
    }
  }

  // logout() {
  //   if (this.location.path() == "/logout") {
  //     localStorage.clear();
  //     localStorage.setItem("loginId", "null");
  //     localStorage.setItem("log_msg", "You have Logged Out Successfully");
  //     alert("LogOut Successful");
  //     this.router.navigateByUrl("/login")
  //   }
  // }
}
