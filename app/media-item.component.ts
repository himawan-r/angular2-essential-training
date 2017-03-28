import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Output() delete = new EventEmitter();
  @Output() preview = new EventEmitter();

  onDelete() {
    console.log("delete");
    this.delete.emit(this.mediaItem);
  }

  onPreview() {
    console.log("preview");
    this.preview.emit(this.mediaItem);
  }
}
