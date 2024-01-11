import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.css'],
})
export class MapDetailComponent {

  countryInfo: any = {}

  constructor (private apiService: ApiService) {}

  getData(event: any) {
    console.log(event.target.id);
    this.apiService.setCountryInfo(event.target.id).subscribe((data: any) => {
      this.countryInfo = {
        ...data,
      }

    })
  }
  searchBar() {
    this.apiService.setCountryInfo(this.countryInfo).subscribe((data: any) => {
      this.countryInfo = {
        ...data,
      }
    })
  }
}
