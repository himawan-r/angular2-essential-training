import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/auth.service';

@Component({
  selector: 'yolo-login',
  templateUrl: 'app/login/yolo-login.component.html',
  styleUrls: ['app/login/yolo-login.component.css']
})
export class YoloLoginComponent{
    form;
    constructor(private formBuilder:FormBuilder, private authenticationService: AuthenticationService) {}

    ngOnInit() {
      this.form = this.formBuilder.group({
          username : this.formBuilder.control('', Validators.required), 
          password : this.formBuilder.control('', Validators.required)
      });
    }

    onSubmit(form) {
        console.log(form);
        this.authenticationService.login(form.username, form.password);
    }

    missMatchPassword() {
      return (group: FormGroup): {[key: string]: any} => {
        let password = group.controls.password;
        let confirm = group.controls.confirm;
        if (password.value !== confirm.value && password.value.trim() !== "" && confirm.value.trim() !== "") {
          return {
            'passwordMissMatch': true
          };
        }
      }
    }
}