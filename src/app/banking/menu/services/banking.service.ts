import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankingService {

  constructor() { }

  balance : BehaviorSubject<number> = new BehaviorSubject(10000);

  transactionStatus : BehaviorSubject<string> =  new BehaviorSubject('pending')

  securityPin : BehaviorSubject<number> = new BehaviorSubject(1234);

  add(amount:number){
    this.balance.next(this.balance.getValue() + amount) ;
  }

  deduct(amount:number){
    if(this.balance.getValue() > amount){
      this.balance.next(this.balance.getValue() - amount) ;
      this.transactionStatus.next('success')
    }
    else{
      this.transactionStatus.next('Error')
    }
  }

  viewBalance(){
    return this.balance.getValue();
  }

  verifySecurityPin(pin:number){
    return pin == this.securityPin.getValue()
  }

  updateSecurityPin(pin:number){
    this.securityPin.next(pin);
  }


}
