import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchApi (name: any) {
    let countryName = name
    let api = `http://api.worldbank.org/v2/country/${countryName}?format=json`
    return this.http.get(api);
  };

  setCountryInfo (id: any) {
    //Subject is a type of observable. Used to access data coming from api
    let subject = new Subject ();

    this.fetchApi(id).subscribe((data: any) => {
      subject.next({
        name: data[1][0].name,
        capital: data[1][0].capitalCity,
        region: data[1][0].region.value,
        income: data[1][0].incomeLevel.value,
        latitude: data[1][0].latitude,
        longitude: data[1][0].longitude
      })
    })
    return subject.asObservable ();
  }
}
