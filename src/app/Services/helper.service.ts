import { Injectable } from '@angular/core';
import { Student } from '../Classes/student';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }
  // helper function
  findeindex(element:Student,studentList:Student[])
  {
    console.log(studentList.indexOf(element))
    return  studentList.indexOf(element)
  }
}
