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
        var test = this.authenticationService.login(form.username, form.password);
        console.log(test);
    }

}