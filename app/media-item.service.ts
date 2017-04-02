import { ListUtilityService } from "./list-utility.service";
export class Filter{
  propertyName : string;
  operator : string;
  value: any;
}

export class MediaItemService extends ListUtilityService{
  isValid(filter) {
    return filter.operator.trim() !== "" && filter.value.trim() !== "" && filter.propertyName.trim() !== "";
  }

  get(filter?: Filter) {
    if(filter && this.isValid(filter)){
      return this.filter(this.mediaItems, filter.propertyName, filter.operator, filter.value);
    }else{
      return this.mediaItems;
    }
  } 
  
  add(mediaItem) {
    this.mediaItems.push(mediaItem);
  }
  
  delete(mediaItem) {
    let index = this.mediaItems.indexOf(mediaItem);
    if(index >= 0) {
      this.mediaItems.splice(index, 1);
    }
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
      movieID: 'A1234567890',
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
      movieID: 'A1234567891',
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
      movieID: 'A1234567892',
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
      movieID: 'A1234567893',
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
      movieID: 'A1234567894',
      isFavorite: false,
      imgSrc : null
    }
  ];
}
