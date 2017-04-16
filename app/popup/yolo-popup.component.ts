import { Component } from '@angular/core';

import { PopupService } from '../service/common-popup.service'

@Component({
  selector: 'yolo-popup',
  templateUrl: 'app/popup/yolo-popup.component.html',
  styleUrls: ['app/popup/yolo-popup.component.css']
})
export class YoloPopupComponent{
    show;
    content;
    constructor(private popupService: PopupService){
      popupService.show.subscribe( (val:boolean) => { this.show = val});
      popupService.content.subscribe( (val:string) => { this.content = val});
    }

    onClose() {
      this.popupService.close();
    }
}