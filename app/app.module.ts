import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemPopupComponent } from './media-item-popup.component';
import { PosterSwitcherComponent } from './poster-switcher.component';
import { FullSizeDirective } from './fullsize.directive';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent,
    MediaItemPopupComponent,
    PosterSwitcherComponent,
    FullSizeDirective
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}