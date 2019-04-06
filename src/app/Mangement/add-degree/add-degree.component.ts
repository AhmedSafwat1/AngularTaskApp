import { Degree } from './../../Classes/degree';
import { DegreeDbService } from './../../Services/degree-db.service';
import { SubjecttDbService } from 'src/app/Services/subjectt-db.service';
import { StudentDbService } from './../../Services/student-db.service';
import { Subject } from './../../Classes/subject';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Student } from 'src/app/Classes/student';

@Component({
  selector: 'app-add-degree',
  templateUrl: './add-degree.component.html',
  styleUrls: ['./add-degree.component.css']
})
export class AddDegreeComponent implements OnInit {
  subjectController = new FormControl()
  selectSubject
  selctStudent:[] =[]
  studentList:Student[] 
  subjectList:Subject[] 
  constructor(private studentSer:StudentDbService,private subjectSer:SubjecttDbService,private degreSer:DegreeDbService) { }

  ngOnInit() {
    this.subjectSer.getAllSubject$().subscribe(
      (s)=>{this.subjectList=s;console.log(s)},
      (e)=>alert(e.statusText)
    )
  }
  change()
  {
    console.log(this.selectSubject)
   
    this.subjectSer.getAllStudentForSubject$(this.selectSubject).subscribe(
      (s)=>{this.studentList=s;console.log(s)},
      (e)=>alert(e.statusText)
    )
    
  }
  save(item,d)
  {
    let data = {
      subject:this.selectSubject,
      student:item._id,
      degree:d
    }
    this.degreSer.insertDegree$(data).subscribe(
      a=>{  this.studentList.splice(this.studentList.indexOf(item),1) },
      e=>{alert(e.statusText)}
    )
  }
}
