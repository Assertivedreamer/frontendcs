import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }


  getStudent(){
    return this.http.get<any>("http://localhost:8000/universities/India")
  }

  getbar(){
    return this.http.get<any>("http://localhost:8000/countries")
  }

  getbar1(){
    return this.http.get<any>("http://localhost:8000/continents2")
  }


  getbar2(){
    return this.http.get<any>("http://localhost:8000/continents")
  }

  getcon(){
    return this.http.get<any>("http://localhost:8000/univeofContinent")
  }
  getconall(){
    return this.http.get<any>("http://localhost:8000/univeofall")
  }
}
