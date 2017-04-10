import { Component } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from '../service/auth.service'

@Component({
  selector: 'yolo-registration',
  templateUrl: 'app/registration/yolo-registration.component.html',
  styleUrls: ['app/registration/yolo-registration.component.css']
})
export class YoloRegistrationComponent{
    form;
    constructor(private formBuilder:FormBuilder, private authService: AuthenticationService) {}

    ngOnInit() {
      this.form = this.formBuilder.group({
          username : this.formBuilder.control('', Validators.required), 
          password : this.formBuilder.control('', Validators.required),
          confirm : this.formBuilder.control('', Validators.required)
      }, {validator: this.missMatchPassword('password', 'confirm')});
    }

    onSubmit(form) {
      var test =  this.authService.register(form);
      console.log(test);
    }

    missMatchPassword(key1, key2) {
      return (group: FormGroup): {[key: string]: any} => {
          let password = group.controls[key1];
          let confirm =group.controls[key2];
          if (password && confirm && password.value !== confirm.value && password.value.trim() !== "" && confirm.value.trim() !== "") {
            return {
              'passwordMissMatch': true
            };
          }else {
            return null;
          }
      }
    }
}