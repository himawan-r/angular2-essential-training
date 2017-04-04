import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { YoloNavigationComponent } from './navigation/yolo-navigation.component';
import { YoloItemComponent } from './item/yolo-item.component';
import { YoloItemListComponent } from './item/yolo-item-list.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    YoloNavigationComponent,
    YoloItemComponent,
    YoloItemListComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}