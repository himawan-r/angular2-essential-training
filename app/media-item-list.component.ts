import { Component, Output, EventEmitter } from '@angular/core';
import { MediaItemComponent } from './media-item.component';
import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {
  mediaItems;
  @Output() preview = new EventEmitter();

  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit() {
    this.mediaItems = this.mediaItemService.get();
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
  }
  
  onMediaItemPreview(mediaItem) {
    this.preview.emit(mediaItem);
  }

  onMediaItemFilter(filter){
    var test= this.mediaItemService.get(filter);
    this.mediaItems= test;
  }

}
