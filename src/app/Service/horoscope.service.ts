import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopeService {

  constructor(private http:HttpClient) { }

  horoscopeUrl = 'http://sandipbgt.com/theastrologer/api/horoscope/cancer/today/';

  horoscope(value:any):Observable<any>
  {
    return this.http.get('http://sandipbgt.com/theastrologer/api/horoscope/' + value + '/today/');
  }
}
