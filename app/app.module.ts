import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemPopupComponent } from './media-item-popup.component';
import { PosterSwitcherComponent } from './poster-switcher.component';
import { FullSizeDirective } from './fullsize.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemPopupComponent,
    PosterSwitcherComponent,
    FullSizeDirective
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}