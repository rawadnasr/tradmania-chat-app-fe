import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }

  get<T>(url: string, options?: any) {
    return this.http.get<T>(url, options)
  }

  post<T, k>(url: string, body: k, options?: any) {
    return this.http.post<T>(url, body, options)
  }

}
