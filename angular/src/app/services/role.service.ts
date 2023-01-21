import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  endpoint = "http://api.sunilos.com:9080/ORSP10/Role/";


  constructor(private http: HttpClient) { }

  get(id: any, responseCB: any) {
    let url = this.endpoint + "get/" + id;
    this.http.get(url).subscribe(function success(data) {
      responseCB(data);
    }, function fail(data) {
      responseCB(data, true)
    });
  }

  save(form: any, responseCB: any) {
    let url = this.endpoint + "save";
    this.http.post(url, form).subscribe(
      (data) => {
        responseCB(data);
      },
      (data) => {
        responseCB(data, true);
      });
  }

  search(form: any, compCB: any) {
    let url = this.endpoint + "search";
    this.http.post(url, form).subscribe(
      (data) => {
        compCB(data);
      },
      (data) => {
        compCB(data, true);
      });
  }
  // edit(id:any,res:any){
  //   let url = this.endpoint + "Update" + id;
  //   this.http.get(url).subscribe((data)=>{
  //     res(data)
  //   },
  //   (data)=>{
  //     res(data,true);
  //   })
  // }

  delete(id: any, compCB: any) {
    let url = this.endpoint + "delete/" + id;
    this.http.get(url).subscribe(
      (data) => {
        compCB(data);
      },
      (data) => {
        compCB(data, true);
      });
  }
}
