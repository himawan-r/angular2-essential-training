import { Component, Inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { lookupListToken } from '../common/constant';
import { AuthenticationService } from '../service/auth.service';

@Component({
  selector: 'yolo-nav',
  templateUrl : 'app/navigation/yolo-navigation.component.html',
  styleUrls: ['app/navigation/yolo-navigation.component.css']
})
export class YoloNavigationComponent{
  public isLoggedIn = false;
  constructor(private authService: AuthenticationService, @Inject(lookupListToken) public lookupLists){
    authService.isLoggedIn.subscribe( (val:boolean) => { console.log("berubah", val); this.isLoggedIn = val});
  }

  onLogOut(){
    this.authService.logOut();
  }
}