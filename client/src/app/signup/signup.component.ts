import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private accountService : AccountService, private toastr : ToastrService) { }

  @Output() cancelRegister = new EventEmitter();

  model : any = {};
  ngOnInit(): void {
  }

  signup(){
    this.accountService.signup(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    },
    error => {
      console.log(error);
      this.toastr.error(error.error);
    });
  }
  cancel(){
    this.cancelRegister.emit(false);
  }

} 
