import { OpaqueToken } from '@angular/core';

export const lookupListToken = new OpaqueToken('lookupListToken');

export const lookupLists = {
  mediums: ['Movies', 'Series'],
  mediaItemProperties: ['name', 'category', 'year'],
  operators: ['startswith', 'equals', 'contains']
};