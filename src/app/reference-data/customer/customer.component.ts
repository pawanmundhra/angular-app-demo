import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerComponent implements OnInit {

  @Input('customerDataQualifier') customerData: Customer;
  customerDataFromService: Customer;
  userData: any;
  userDataObservable: Observable<any>;
  constructor(private custService: CustomerService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.customerDataFromService = this.custService.fetchCustomerData();
    this.userDataObservable = this.custService.getUserData();
    this.getUserDataFromService();
  }

  deleteUserData(obj) {
    this.custService.deleteUserData(obj).subscribe(response => {
       console.log('Customer Component deleteUserData');
       console.log(response);
       const index = this.userData.indexOf(obj);
       this.userData.splice(index, 1);
    });
  }

  getUserDataFromService() {
    this.custService.getUserData().subscribe(response => {
        this.userData = response;
        this.cd.markForCheck;
        console.log(this.userData);
      }
    );

    return this.userData;
  }

}
