import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

const API_BASE_URL = environment.API_URL ? environment.API_URL : environment.AUTOCOMPLETE_API_URL;

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

  get(url: string, params?: any): any {
    return this.http.get(API_BASE_URL + url, {params});
  }

  post(url: string, data: any): any {
    return this.http.post(API_BASE_URL + url, data);
  }

  put(url: string, data: any): any {
    return this.http.put(API_BASE_URL + url, data);
  }

  delete(url: string, data: any): any {
    return this.http.put(API_BASE_URL + url, data);
  }

  remove(url: string): any {
    return this.http.delete(API_BASE_URL + url);
  }

  patch(url: string, data: any): any {
    return this.http.patch(API_BASE_URL + url, data);
  }
}
