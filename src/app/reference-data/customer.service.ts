import { Injectable } from '@angular/core';
import { Customer } from './Customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
    console.log('Customer Service Started');
  }

  customerDataObj: Customer = {
    name: 'Pawan Mundhra',
    age: 30,
    office: 'NRI'
  };

  getUserData(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }

  fetchCustomerData() {
    return this.customerDataObj;
  }

  deleteUserData(obj) {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + obj.id);
  }

}
