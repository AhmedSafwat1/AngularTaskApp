import { Subject } from './../Classes/subject';
import { Student } from './../Classes/student';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentDbService {

  urlBase="http://localhost:8080/api/student"
  
  constructor(public http:HttpClient) { }
  getAllStudent$()
  {
    return this.http.get<Student[]>(this.urlBase+"/")
  }
  getStudnetById(id)
  {
    return this.http.get<Student>(this.urlBase+`/${id}`)
  }
  delete(id)
  {
    return this.http.delete<Student>(this.urlBase+`/${id}`)
  }
  updateStudent$(id,student:Student){
    return this.http.put<Student>(this.urlBase+`/${id}`,student)
  }
  insertStudent$(student:Student){
   
    return this.http.post<Student>(this.urlBase+`/`,student)
  }
  insertSubject(student:[],subject:[])
  {
    let flag = true
    student.forEach(async(e)=>{
      let data = {
        subjects:subject
      }
      await this.http.put<Student>(this.urlBase+`/${e}/subject`,data)
      .subscribe(a=>console.log(a),(e)=>flag=false)
    })
    return flag
  }
}
