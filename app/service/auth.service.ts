import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { PopupService } from '../service/common-popup.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationService {
    constructor(private popup: PopupService){}
    isLoggedIn: Subject<boolean> = new Subject();

    user = [
      {username: "himawan-r", password: "test123test"}
    ]

    login(username, password){
      let user =  _.find(this.user, function(obj){
        return obj.username === username && obj.password === password;
      });
      var message = user ? "login Successful" : "Username or password is invalid";
      this.isLoggedIn.next(user? true : false);
      this.popup.content.next(message);
      this.popup.show.next(false);
      return user ? { status: 200, message : message} : { status: 500, message : message};
    }

    register(registerObject){
      let user = null;
      user =   _.find(this.user, function(obj){
        return obj.username === registerObject.username && obj.password === registerObject.password;
      });
      if(user === null || typeof user === 'undefined'){
        this.user.push(registerObject);
      }
      let message = user ? "Username already exist" : "Register Successful";
      this.popup.content.next(message);
      this.popup.show.next(false);
    }

    logOut() {
      this.isLoggedIn.next(false);
    }


}