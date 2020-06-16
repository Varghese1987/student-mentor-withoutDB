import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateMentorComponent } from './update-mentor/update-mentor.component';
import { AddMentorComponent } from './add-mentor/add-mentor.component';
import { ListMentorComponent } from './list-mentor/list-mentor.component';


const routes: Routes = [
  {
    path:"student-list",
    component: StudentListComponent
  },
  {
    path:"add-student",
    component:AddStudentComponent
  },
  {
    path:"add-mentor",
    component: AddMentorComponent
  },
  {
    path:"mentor-list",
    component : ListMentorComponent
  },
  {
    path:"update-mentor/:studentId",
    component:UpdateMentorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
