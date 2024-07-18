import { Component } from '@angular/core';
import { BankingService } from '../../services/banking.service';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balance-enquery',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './balance-enquery.component.html',
  styleUrl: './balance-enquery.component.css'
})
export class BalanceEnqueryComponent {
  constructor(
    private service : BankingService,
    private router : Router
  ){

  }
  
  currentBalance : number = 0
  userVarified : boolean = false
  pin : any  =  '' 

  backToMenu(){
    this.router.navigate([''])
  }

  ngOnInit(){
    this.getBalance();
  }

  getBalance(){
    this.currentBalance = this.service.viewBalance()
  }

  verifyUser(){
    this.userVarified =  this.service.verifySecurityPin(Number(this.pin))
  }
}
