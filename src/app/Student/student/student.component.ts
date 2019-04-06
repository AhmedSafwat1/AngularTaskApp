import { Student } from './../../Classes/student';
import { StudentDbService } from './../../Services/student-db.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentList:Student[]
  student:Student = new Student("","","","",[])
  editFlag = false;
  addFlage = false;
  updateId = null
  constructor(private studentSer:StudentDbService,private router:Router) { }

  ngOnInit() {
    this.studentSer.getAllStudent$().subscribe(s=> {this.studentList=s})
  }
  save(){
    let s = new Student(this.student._id,this.student.name,this.student.mobile,this.student.email,this.student.subjects)
    this.studentSer.insertStudent$(s).subscribe(
      s=>{this.studentList.push(s);this.restStudent()},
      e=>{alert(e.error) ;console.log(e.statusText)}
      )
  
  }
  delete(item)
  {
    let index = this.findeindex(item)
    this.studentSer.delete(item._id).subscribe(a=>this.studentList.splice(index,1),
    e=>alert(e.error)
    )
  }
  update(item)
  {
    let i = this.findeindex(item)
    this.editFlag = !this.editFlag ;
    this.student._id = this.studentList[i]._id
    this.student.name = this.studentList[i].name
    this.student.email = this.studentList[i].email
    this.student.subjects = this.studentList[i].subjects
    this.student.mobile = this.studentList[i].mobile
    this.updateId = i
  }
  updateDate()
  {
    console.log(this.updateId)
    this.studentSer.updateStudent$(this.student._id,this.student)
    .subscribe( s => {this.studentList[this.updateId] = s;this.restStudent()} ,
    (e)=>alert(e.error)
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
    this.student.email = ""
    this.student.subjects = []
    this.student.mobile = null
    this.updateId = null
    this.editFlag = false;
    this.addFlage = false;
  }
}
