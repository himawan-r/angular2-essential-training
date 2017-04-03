import { Component, Output, EventEmitter } from '@angular/core';
import { MediaItemComponent } from './media-item.component';
import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {
  medium = '';
  mediaItems = [];
  @Output() preview = new EventEmitter();

  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit() {
    this.getMediaItems();
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem)
      .subscribe(() => {
        this.getMediaItems();
      });
  }
  
  getMediaItems(filter?) {
    this.mediaItemService.get(filter)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      });
  }
  
  onMediaItemPreview(mediaItem) {
    this.preview.emit(mediaItem);
  }

  onMediaItemFilter(filter){
    this.getMediaItems(filter);
  }

}
