import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
    console.log(x.update);
  }

  submitButtonClass(f) {
    console.log(f.valid);
    return f.valid;
  }

  submit(x) {
    console.log(x);
  }

}
