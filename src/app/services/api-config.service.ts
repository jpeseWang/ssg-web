import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiConfigService {
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(`${environment.apiUrl}/${url}`);
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.httpClient.post<T>(`${environment.apiUrl}/${url}`, data);
  }
}
