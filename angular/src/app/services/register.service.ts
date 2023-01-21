import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  endpoint = "http://api.sunilos.com:9080/ORSP10/User/";

  constructor(private http: HttpClient) { }

  get(id: any, responseCB: any) {
    let url = this.endpoint + "get/" + id;
    this.http.get(url).subscribe(function success(data) {
      responseCB(data);
      console.log("success", data);
    }, function fail(data) {
      responseCB(data, true)
      console.log("fail", data.statusText)
    });
  }


  //add data
  save(form: any, compCB: any) {
    let url = this.endpoint + "save";
    console.log(url);
    this.http.post(url, form).subscribe(
      (data) => {
        compCB(data)
      },
      (data) => {
        compCB(data, true);
      });
  }


  delete(id: any, responseCB: any) {
    let url = this.endpoint + "delete/" + id;
    this.http.get(url).subscribe(
      (data) => {
        responseCB(data);
      },
      (data) => {
        responseCB(data, true);
      });
  }

  edit(id:any, responseCB:any){
     let url = this.endpoint + "update" + id;
      this.http.get(url).subscribe(
        (data) => {
          responseCB(data);
        },
        (data) => {
          responseCB(data, true);
        });
  }

  search(form: any, responseCB: any) {
    let url = this.endpoint + "search";
    this.http.post(url, form).subscribe(
      (data) => {
        responseCB(data);
      },
      (data) => {
        responseCB(data, true);
      });
  }
}
