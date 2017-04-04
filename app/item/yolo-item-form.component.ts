import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'yolo-item-form',
  templateUrl: 'app/item/yolo-item-form.component.html',
  styleUrls: ['app/item/yolo-item-form.component.css']
})
export class YoloItemFormComponent{
    form;
    constructor(private formBuilder:FormBuilder) {}

    ngOnInit() {
      this.form = this.formBuilder.group({
          name : this.formBuilder.control('', Validators.required), 
          price : this.formBuilder.control('', Validators.required),
          desc : this.formBuilder.control('', Validators.required),
          rating : this.formBuilder.control('', Validators.required)
      });
    }

    onSubmit(form) {
        console.log(form);
    }
}