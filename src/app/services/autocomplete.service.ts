import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {API_CONSTANTS} from '../constants';
import {HttpClientService} from './http-client.service';

@Injectable({
  providedIn: 'root',
})
export class AutocompleteService {
  constructor(private http: HttpClientService) {}

  get(filterValue: string): any {
    return this.http.get(`${API_CONSTANTS.AUTOCOMPLETE}?search=${encodeURI(filterValue)}`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
