import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  count:number;
  
  url: any = 'http://localhost:8000/posts';
 url2:any = 'http://localhost:9000/posts';
  
constructor(private http: HttpClient) {}

  addPatient(data: any) {
    return this.http.post(this.url, data);
   
  }

  getPatient() {
    return this.http.get(this.url);
  }

  increasePatientCount(count) {
   this.count++;
  }

  postDoctor(data: any){
    return this.http.post<any>(this.url2 , data)
  }

  getDoctor(){
    return this.http.get<any>(this.url2);
  }


  
}
