
import { Student } from './../Classes/student';
import { Subject } from './../Classes/subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjecttDbService {

  urlBase="http://localhost:8080/api/subject"
  constructor(public http:HttpClient)  { }
  getAllSubject$()
  {
    return this.http.get<Subject[]>(this.urlBase+"/")
  }

  getAllStudentForSubject$(id)
  {
    return this.http.get<Student[]>(this.urlBase+`/${id}/studentsfilter`)
  }
  //=====================
  getSubjectById(id)
  {
    return this.http.get<Subject>(this.urlBase+`/${id}`)
  }
  delete(id)
  {
    return this.http.delete<Subject>(this.urlBase+`/${id}`)
  }
  updateSubject$(id,student:Subject){
    return this.http.put<Subject>(this.urlBase+`/${id}`,student)
  }
  insertSubject$(student:Subject){
   
    return this.http.post<Subject>(this.urlBase+`/`,student)
  }
}
