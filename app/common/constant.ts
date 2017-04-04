import { OpaqueToken } from '@angular/core';

export const lookupListToken = new OpaqueToken('lookupListToken');

export const lookupLists = {
  menu: [{text:'List', href:'/list'}, {text:'Form', href:'/form'}]
};