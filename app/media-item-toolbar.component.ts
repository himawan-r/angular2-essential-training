import { Component, Inject, Output, EventEmitter } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { lookupListToken } from "./providers";

@Component({
  selector: "mw-toolbar",
  templateUrl : "app/media-item-toolbar.component.html",
  styleUrls: ["app/media-item-form.component.css"]
})
export class MediaItemToolbarComponent{
    constructor(private formBuilder: FormBuilder, @Inject(lookupListToken) public lookupLists) {}
    form;
    @Output() filter = new EventEmitter();

    ngOnInit() {
        this.form = this.formBuilder.group({
            value : this.formBuilder.control(""),
            propertyName : this.formBuilder.control("name"),
            operator: this.formBuilder.control("equals"),
        });
    }

    filterMediaItem(formInput) {
        this.filter.emit(formInput);
    }
}