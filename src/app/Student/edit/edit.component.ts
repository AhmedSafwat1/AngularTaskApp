import { StudentDbService } from './../../Services/student-db.service';
import { Student } from './../../Classes/student';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  student:Student = new Student("","","","",[])
  constructor(private studentSer:StudentDbService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.changeRoute()  
  }
  changeRoute()
  {
    console.log(this.route.snapshot.paramMap.get("id"))
    this.studentSer.getStudnetById(this.route.snapshot.paramMap.get("id"))
                    .subscribe(s=>this.student = s)
  }
  

}
