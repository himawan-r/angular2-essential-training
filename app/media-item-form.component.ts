import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
  form : FormGroup;
  fb : FormBuilder;

  ngOnInit() {
    this.fb = new FormBuilder();
    this.form = this.fb.group({
      medium: new FormControl('Movies'),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator),
      movieID: new FormControl('', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(12),
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      watchedOn: new FormControl('', this.watchedOnValidator),
      rating: new FormControl('')
    }, {validator: this.requiredIfFirstFieldFilled('watchedOn', 'rating')});
  }

  yearValidator(control) {
    if(control.value.trim().length === 0) {
      return null;
    }
    let year = parseInt(control.value);
    let minYear = 1900;
    let maxYear = 2100;
    if(year >= minYear && year <= maxYear) {
      return null;
    } else {
      return { 'year': true };
    }
  }

  watchedOnValidator(control) {
    if(new Date(control.value) > new Date()){
      return { 'watchedOn': true };
    }else{
      return null;
    }
  }

  requiredIfFirstFieldFilled(watchedOnKey: string, ratingKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let watchedOn = group.controls[watchedOnKey];
      let rating = group.controls[ratingKey];
      if (watchedOn.value !== "" && rating.value === "") {
        return {
          'watchedOnRequired': true
        };
      }
    }
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}
