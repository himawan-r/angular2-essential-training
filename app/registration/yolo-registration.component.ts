import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'yolo-item-registration',
  templateUrl: 'app/registration/yolo-registration.component.html',
  styleUrls: ['app/registration/yolo-registration.component.css']
})
export class YoloRegistrationComponent{
    form;
    constructor(private formBuilder:FormBuilder) {}

    ngOnInit() {
      this.form = this.formBuilder.group({
          username : this.formBuilder.control('', Validators.required), 
          password : this.formBuilder.control('', Validators.required),
          confirm : this.formBuilder.control('', Validators.required)
      }, {validator: this.missMatchPassword()});
    }

    onSubmit(form) {
        console.log(form);
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