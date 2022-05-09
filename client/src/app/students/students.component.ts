import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  redirectToForm(){
    this.router.navigateByUrl('/studentForm');
  }
}
