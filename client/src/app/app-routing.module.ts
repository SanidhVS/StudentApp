import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentDetailFormComponent } from './student-detail-form/student-detail-form.component';
import { StudentsComponent } from './students/students.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '',component : HomeComponent},
  {path: 'students',component : StudentsComponent, canActivate : [AuthGuard]},
  {path: 'studentForm',component : StudentDetailFormComponent, canActivate : [AuthGuard]},
  {path: '**',component : StudentsComponent, pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
