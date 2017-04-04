import { Component, Input } from '@angular/core';

@Component({
  selector: 'yolo-item',
  templateUrl: 'app/item/yolo-item.component.html',
  styleUrls: ['app/item/yolo-item.component.css']
})
export class YoloItemComponent{
  @Input() item;
  
}