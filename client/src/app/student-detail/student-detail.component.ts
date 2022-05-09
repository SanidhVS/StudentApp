import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student } from '../_models/student.model';
import { StudentService } from '../_services/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor(public studentService : StudentService, private router : Router, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.studentService.getAllStudentList()
  }

  populateStudentForm(studentDetail : Student){
    this.studentService.formData = studentDetail;
    this.router.navigateByUrl('/studentForm');
  }

  deleteStudentrecord(id : Number){
    this.studentService.deleteStudentRecord(id).subscribe(
      response => {
        this.toastr.success("Record deleted succesfully");
        this.studentService.getAllStudentList();
      }
    )
  }

}
