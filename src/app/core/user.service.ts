import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {User} from '../todo/models/entities';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  private api_url = 'http://localhost:3000/users';

  constructor(private http: Http) { }

  public findUser(username: string): Observable<User> {
    const url = `${this.api_url}/?username=${username}`;

    return this.http.get(url)
      .map(res => {
        const users = res.json() as User[];

        return (users.length > 0) ? users[0] : null;
    });
  }

  getUser(userId: number): Observable <User> {
    const url = `${this.api_url}/${userId}`;
    return this.http.get(url)
      .map(res => res.json() as User);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only

    return Promise.reject(error.message || error);
  }

}
