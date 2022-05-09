import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Student } from '../_models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient, private toastr : ToastrService) { }
  baseUrl = 'https://localhost:44303/api/Student';
  formData : Student = new Student();
  studentList : Student[];

  saveStudentForm(){
   return this.http.post(this.baseUrl,this.formData);
  }

  getAllStudentList(){
   this.http.get(this.baseUrl)
    .toPromise()
    .then(res => this.studentList = res as Student[]);
  }

  updateStudentRecord(){
    return this.http.put(`${this.baseUrl}/${this.formData.id}`,this.formData);
  }

  deleteStudentRecord(id :Number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
