import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarksheetService } from '../services/marksheet.service';

@Component({
  selector: 'app-marksheetlist',
  templateUrl: './marksheetlist.component.html',
  styleUrls: ['./marksheetlist.component.css']
})
export class MarksheetlistComponent implements OnInit {
  // showEditable = false;
  message = "";

  List:any = [];

  form:any = {
    "rollNo":"",
    "name":"",
  };
  inputError:any={
    "rollNo":"",
    "name":"",
  };

  responseObject = null;

  constructor(private aroute:ActivatedRoute, private router: Router, private service:MarksheetService) { }

  ngOnInit(): void {
    this.search();
    // var self = this;
    // this.form.id = Number(this.aroute.snapshot.paramMap.get("id"));
    // if (!isNaN(this.form.id) && this.form.id > 0) {
    //   this.service.get(this.form.id, function (res: any, error: any) {
    //     if (error) {
    //       alert("Error:" + error.message);
    //       return;
    //     }
    //     self.showEditable = true;
    //     self.form = res.result.data;
    //   });
    // }
  }
  edit(id:any) {
    this.router.navigateByUrl('/marksheet/' + id);
  }

  delete(id:any) {
    var self = this;
    this.service.delete(id, function (res:any, error:any) {
      if (error) {
        alert("Error" + res.message);
        return;
      }
      self.search();
    });
  }

  search() {
    var self = this;
    this.service.search(this.form, function (res:any, error:any) {
      if (error) {
        alert("Error" + res.message);
        return;
      }
      self.List = res.result.data;
      self.responseObject = res;
    });
  }

  getString(obj:any){
    return JSON.stringify(obj);
  }
}
