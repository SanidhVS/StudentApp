import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student } from '../_models/student.model';
import { StudentService } from '../_services/student.service';

@Component({
  selector: 'app-student-detail-form',
  templateUrl: './student-detail-form.component.html',
  styleUrls: ['./student-detail-form.component.css']
})
export class StudentDetailFormComponent implements OnInit {

  constructor(public studentService : StudentService, private router : Router, private toastr : ToastrService) { }

  ngOnInit(): void {
  }
  onDetailsSubmit(form : NgForm){
    if(this.studentService.formData.id == 0) 
    this.insertStudentRecord(form);
    else
    this.updateStudentRecord(form)
  }

  insertStudentRecord(form : NgForm){
    this.studentService.saveStudentForm().subscribe(
      response => {
        this.resetForm(form)
        this.toastr.success("Student record added successfully")
        this.router.navigateByUrl('/students');
      },
      error => {
        console.log(error.error);
        this.toastr.error(error.error);
      }
    );
  }

  updateStudentRecord(form : NgForm){
    this.studentService.updateStudentRecord().subscribe(
      response => {
        this.resetForm(form);
        this.toastr.success("Student record updated successfully");
        this.router.navigateByUrl('/students')
      },
      error => {
        console.log(error.error);
        this.toastr.error(error.error);
      }
    )
  }

  resetForm(form : NgForm){
    form.form.reset();
    this.studentService.formData = new Student();
    this.studentService.getAllStudentList();
  }

  onCancelForm(){
    this.router.navigateByUrl('/students');
    this.studentService.formData = new Student();
  }

}
