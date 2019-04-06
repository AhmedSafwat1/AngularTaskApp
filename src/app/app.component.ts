import { SubjecttDbService } from './Services/subjectt-db.service';
import { StudentDbService } from './Services/student-db.service';
import { DegreeDbService } from './Services/degree-db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  title = 'angularTaskApp';
  constructor(private degser:DegreeDbService,private stuSer:StudentDbService,private subSer:SubjecttDbService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.degser.getAllDegree$().subscribe(d=>console.log(d))
    this.stuSer.getAllStudent$().subscribe(s=>console.log(s))
    this.subSer.getAllSubject$().subscribe(s=>console.log(s))
  }
}
