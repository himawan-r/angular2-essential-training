import { Component, Inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { lookupListToken } from '../common/constant';

@Component({
  selector: 'yolo-nav',
  templateUrl : 'app/navigation/yolo-navigation.component.html',
  styleUrls: ['app/navigation/yolo-navigation.component.css']
})
export class YoloNavigationComponent{
  constructor(@Inject(lookupListToken) public lookupLists){}
}