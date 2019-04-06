import { SubjecttDbService } from './../../Services/subjectt-db.service';
import { Subject } from './../../Classes/subject';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  studentList:Subject[]
  student:Subject = new Subject(null,"",null)
  editFlag = false;
  addFlage = false;
  updateId = null
  constructor(private subjectSer:SubjecttDbService,private router:Router) { }

  ngOnInit() {
    this.subjectSer.getAllSubject$().subscribe(s=> {this.studentList=s},e=>{alert(e.error) ;console.log(e.statusText)})
  }
  save(){
    let s = new Subject(this.student._id,this.student.name,this.student.totalDegree)
    this.subjectSer.insertSubject$(s).subscribe(
      s=>{this.studentList.push(s);this.restStudent()},
      e=>{alert(e.error) ;console.log(e.statusText)}
      )
  
  }
  delete(item)
  {
    let index = this.findeindex(item)
    this.subjectSer.delete(item._id).subscribe(a=>this.studentList.splice(index,1),
    e=>{alert(e.error) ;console.log(e.statusText)})
  }
  update(item)
  {
    let i = this.findeindex(item)
    this.editFlag = !this.editFlag ;
    this.student._id = this.studentList[i]._id
    this.student.name = this.studentList[i].name
    this.student.totalDegree = this.studentList[i].totalDegree
    this.updateId = i
  }
  updateDate()
  {
    console.log(this.updateId)
    this.subjectSer.updateSubject$(this.student._id,this.student)
    .subscribe( s => {this.studentList[this.updateId] = s;this.restStudent()} ,
    e=>{alert(e.error) ;console.log(e.statusText)}
     )
 

  }
  addFun()
  {
    this.restStudent()
    
    this.addFlage = true;
  }
   
  //============================
  findeindex(element)
  {
    console.log(this.studentList.indexOf(element))
    return  this.studentList.indexOf(element)
  }
  restStudent()
  {
    this.student._id = null
    this.student.name = ""
    this.student.totalDegree = null
    this.updateId = null
    this.editFlag = false ;
    this.addFlage = false;
  }

}
