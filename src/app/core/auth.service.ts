import { Injectable } from '@angular/core';
import {Auth} from '../todo/models/entities';
import {UserService} from './user.service';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class AuthService {
  auth: Auth = {hasError: true, redirectUrl: '', errMsg: 'not logged in'};
  subject: ReplaySubject<Auth> = new ReplaySubject<Auth>(1);

  constructor(private userService: UserService) { }

  public loginWithCredentials(username: string, password: string): Observable <Auth> {
    return this.userService.findUser(username).map(user => {
      const auth = new Auth();
      localStorage.removeItem('userId');
      auth.redirectUrl = (localStorage.getItem('redirectUrl') === null) ? '/' : localStorage.getItem('redirectUrl');;

      if (null === user) {
        auth.hasError = true;
        auth.errMsg = 'user not found';
      } else if (password === user.password) {
        auth.user = Object.assign({}, user);
        auth.hasError = false;
        localStorage.setItem('userId', user.id + '');
      } else {
        auth.hasError = true;
        auth.errMsg = 'password not match';
      }
      this.auth = Object.assign({}, auth);
      this.subject.next(this.auth);

      return this.auth;
    });
  }

  getAuth(): Observable<Auth> {
    return this.subject.asObservable();
  }

  unAuth(): void {
    this.auth = Object.assign(
      {},
      this.auth,
      {user: null, hasError: true, redirectUrl: '', errMsg: 'not logged in'});
    this.subject.next(this.auth);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
