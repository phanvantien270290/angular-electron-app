import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Config {
  userUrl: string;
  textfile: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri = 'http://localhost:4000';
  constructor(
    private httpService: HttpClient
  ) { }
  getList() {
    return this.httpService.get('../../assets/company.json');
  }
  createUser(data) {
    this.httpService.put(`${this.uri}/api/user/create`, data).subscribe(res => {
      console.log('done');
    });
  }
}
