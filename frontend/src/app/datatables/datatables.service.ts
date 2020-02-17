import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatatablesService {

  constructor(
    private httpService: HttpClient
  ) { }
  getData() {
    return this.httpService.get('../../assets/company.json');
  }
}
