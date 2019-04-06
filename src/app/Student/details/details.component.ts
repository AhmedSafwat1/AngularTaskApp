import { Degree } from './../../Classes/degree';
import { Student } from './../../Classes/student';

import { DegreeDbService } from './../../Services/degree-db.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentDbService } from 'src/app/Services/student-db.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
   student:Student = new Student(null,"","","",[])
   studentDeg:Degree[]
  constructor(private degServ:DegreeDbService,private studentSer:StudentDbService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get("id"))
    this.studentSer.getStudnetById(this.route.snapshot.paramMap.get("id"))
                    .subscribe(s=>{this.student = s;console.log(this.student)},e=>{alert(e);this.router.navigateByUrl("errors")})
    this.degServ.getallDegreeInfoForStudent$(this.route.snapshot.paramMap.get("id"))
           .subscribe(s=>this.studentDeg = s,e=>alert(e))

  }

}
