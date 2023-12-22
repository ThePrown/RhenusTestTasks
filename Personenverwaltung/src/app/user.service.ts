import { HttpClient } from '@angular/common/http';
import { User, UserWithoutId } from './user'
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:3000';  

  private userListSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) {}


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getUserByID(id : number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }

  deleteUserByID(id : number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }

  addUser(user: UserWithoutId):  Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  editUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/users/${user.id}`, user);
  }
}
