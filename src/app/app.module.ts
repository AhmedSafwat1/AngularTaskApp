import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// custome import
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './Student/student/student.component';
import { NavComponent } from './layouts/nav/nav.component';
import { SubjectComponent } from './subject/subject/subject.component';
import { ErrorsComponent } from './layouts/errors/errors.component';
import { EditComponent } from './Student/edit/edit.component';
import { FormsModule ,ReactiveFormsModule} from "@angular/forms";
import { AddSubjectComponent } from './Mangement/add-subject/add-subject.component';
import {MatSelectModule,MatFormFieldModule,MatInputModule, MatButtonModule,} from '@angular/material';
import { ManageComponent } from './Mangement/manage/manage.component';

import { AddDegreeComponent } from './Mangement/add-degree/add-degree.component';
import { DetailsComponent } from './Student/details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    NavComponent,
    SubjectComponent,
    ErrorsComponent,
    EditComponent,
    AddSubjectComponent,
    ManageComponent,
    
    AddDegreeComponent,
    
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
