import { Degree } from './../Classes/degree';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DegreeDbService {
  urlBase="http://localhost:8080/api/degree"
  constructor(public http:HttpClient) { }
  getAllDegree$()
  {
    return this.http.get<Degree[]>(this.urlBase+"/")
  }
  insertDegree$(degree)
  {
    return this.http.post<Degree>(this.urlBase+"/",degree)
  }
  getallDegreeInfoForStudent$(id)
  {
    return this.http.get<Degree[]>(this.urlBase+`/student/${id}`)
  }
  
}
