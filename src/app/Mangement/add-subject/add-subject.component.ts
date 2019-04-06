import { Student } from './../../Classes/student';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'src/app/Classes/subject';
import { StudentDbService } from 'src/app/Services/student-db.service';
import { SubjecttDbService } from 'src/app/Services/subjectt-db.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  
  studentController = new FormControl()
  subjectController = new FormControl()
  selectSubject:[] =[]
  selctStudent:[] =[]
  studentList:Student[] 
  subjectList:Subject[] 
  
  constructor(private studentSer:StudentDbService,private subjectSer:SubjecttDbService) { }

  ngOnInit() {
    this.studentSer.getAllStudent$().subscribe(
      (st)=>this.studentList=st,
      (e)=>alert(e.statusText)
      )
    this.subjectSer.getAllSubject$().subscribe(
      (s)=>{this.subjectList=s;console.log(s)},
      (e)=>alert(e.statusText)
    )
  } 
  save(){
    console.log(this.selctStudent,this.selectSubject)
    let flag = this.studentSer.insertSubject(this.selctStudent,this.selectSubject)
    if(flag)
    {
      this.selctStudent = []
      this.selectSubject = []
    }
    console.log(this.selectSubject)
  }

}
