import { Injectable } from '@angular/core';
import * as _ from 'lodash';

export class AuthenticationService {
    user = [
      {username: "himawan-r", password: "test123test"}
    ]

    login(username, password){
      let user _.find(this.user, function(obj){
        return obj.username === username && obj.password === password;
      });
      
    }

    register(registerObject){
      let user = null;
      user =   _.find(this.user, function(obj){
        return obj.username === registerObject.username && obj.password === registerObject.password;
      });
      if(user === null || typeof user === 'undefined'){
        this.user.push(registerObject);
      }
      return user ? "Username already exist" : "Register Successful";
    }


}