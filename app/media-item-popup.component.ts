import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item-popup',
  templateUrl : 'app/media-item-popup.component.html',
  styleUrls: ['app/media-item-popup.component.css']
})
export class MediaItemPopupComponent{
  @Input() mediaItem;
  @Output() close = new EventEmitter();

  onClose() {
    console.log("close");
    this.close.emit();
  }

  isClosed() {
    return this.mediaItem ? false : true;
  }

  getPosterList() {
    return this.mediaItem && this.mediaItem.posters ? this.mediaItem.posters : [];
  }
}