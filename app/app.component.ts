import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
    selectedMediaItem = null;
    
    onMediaItemPreview(mediaItem) {
      this.selectedMediaItem = mediaItem;
    }

    onMediaItemPopupClose() {
      this.selectedMediaItem = null;
    }
 }
