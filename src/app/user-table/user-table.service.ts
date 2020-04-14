import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/users';

@Injectable({
  providedIn: 'root',
})
export class UserTableService {
  constructor(private httpClient: HttpClient) {}

  public getUsers(): Observable<User[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient.get<User[]>(url);
  }

  public deleteUser(id: number): Observable<any> {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return this.httpClient.get<any>(url);
  }
}
