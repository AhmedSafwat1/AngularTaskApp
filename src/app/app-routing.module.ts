import { DetailsComponent } from './Student/details/details.component';
import { AddDegreeComponent } from './Mangement/add-degree/add-degree.component';
import { AddSubjectComponent } from './Mangement/add-subject/add-subject.component';
import { ErrorsComponent } from './layouts/errors/errors.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './Student/student/student.component';
import { SubjectComponent } from './subject/subject/subject.component';
import { EditComponent } from './Student/edit/edit.component';
import { ManageComponent } from './Mangement/manage/manage.component';

const routes: Routes = [
  
  {path:"student",component:StudentComponent},
  {path:"student/:id",component:DetailsComponent},
  {path:"subject",component:SubjectComponent},
  {path:"manage",component:ManageComponent,children:[
    {path:"add",component:AddSubjectComponent},
    {path:"set",component:AddDegreeComponent}
  ]},
  {path:"**",component:ErrorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
