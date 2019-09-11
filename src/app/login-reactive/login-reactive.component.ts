import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UserIdValidator } from './UserIdValidator';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {

  formGrp: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formGrp = new FormGroup({
        userId : new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          UserIdValidator.spaceCheck]
          ),
        pwd : new FormControl('', [
              Validators.required]
          )
      }
    );
  }

  get userId() {
    return this.formGrp.get('userId');
  }

  login() {
    console.log(this.formGrp);
    this.formGrp.setErrors({

      }
    );
  }

  isFormValid() {
    console.log(this.formGrp);
    return this.formGrp.valid;
  }

  log(x) {
    console.log(x);
  }
}
