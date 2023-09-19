import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _httpClient: HttpClient) {}

  // create user
  creteUser(data: any): Observable<any> {
    return this._httpClient.post(environment.backendUrl + 'user', data);
  }
}
