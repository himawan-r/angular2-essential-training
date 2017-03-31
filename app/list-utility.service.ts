import * as _ from 'lodash';

export class ListUtilityService{
  filter(listToSearch: Array<Object>, propertyName: string, value:any){
      _.filter(listToSearch, function(obj){
          return obj[propertyName] === value;
      })
  }
}