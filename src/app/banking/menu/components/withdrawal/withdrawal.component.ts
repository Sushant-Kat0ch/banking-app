import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { BankingService } from '../../services/banking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdrawal',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './withdrawal.component.html',
  styleUrl: './withdrawal.component.css'
})
export class WithdrawalComponent {

  userVarified : boolean = false
  amount : any   
  pin: any = ''
  widthrawalStatus: string = '';
  constructor(
    private service : BankingService,
    private router : Router
  ){

  }

  backToMenu(){
    this.router.navigate([''])
  }

  ngOnInit(){ 
    this.service.transactionStatus.subscribe( (val: string) => {
      this.widthrawalStatus = val
      console.log(this.widthrawalStatus)
    } )
  }

  widthrawAmount(){
    this.service.deduct(Number(this.amount))
  }

  verifyUser(){
    this.userVarified =  this.service.verifySecurityPin(Number(this.pin))
    if(this.userVarified){
      this.service.transactionStatus.next('pending')
    }
  }


  

}
