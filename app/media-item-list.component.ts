import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {
  @Output() preview = new EventEmitter();

  onMediaItemDelete(mediaItem) { }

  onMediaItemPreview(mediaItem) {
    this.preview.emit(mediaItem);
  }

  mediaItems = [
    {
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      rating: 2,
      watchedOn: 1294166565384,
      isFavorite: false,
      posters: [
        {imgSrc: './media/firebug1.png', selected: true, isAvailableFullSize : true},
        {imgSrc: './media/firebug2.png', selected: false, isAvailableFullSize : false}
      ]
    },
    {
      id: 2,
      name: "The Small Tall",
      medium: "Movies",
      category: "Comedy",
      year: 2015,
      rating: 3.5,
      watchedOn: null,
      isFavorite: true,
      posters: [
        {imgSrc: './media/smalltall1.png', selected: true, isAvailableFullSize : true},
        {imgSrc: './media/smalltall2.png', selected: false, isAvailableFullSize : true}
      ]
    }, {
      id: 3,
      name: "The Redemption",
      medium: "Movies",
      category: "Action",
      year: 2016,
      rating: 4.7,
      watchedOn: null,
      isFavorite: false,
      imgSrc : null
    }, {
      id: 4,
      name: "Hoopers",
      medium: "Series",
      category: "Drama",
      year: null,
      rating: 3.2,
      watchedOn: null,
      isFavorite: true,
      imgSrc : null
    }, {
      id: 5,
      name: "Happy Joe: Cheery Road",
      medium: "Movies",
      category: "Action",
      year: 2015,
      rating: 2.7,
      watchedOn: 1457166565384,
      isFavorite: false,
      imgSrc : null
    }
  ];
}
