import { Injectable } from '@angular/core';
import { Customer } from '../appModels/customer.model';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url= 'http://localhost:3000/Customer'
  constructor(private http :HttpClient) { }

  addCustomer(cust:Customer){
    return this.http.post(this.url, cust )
  }
}
 