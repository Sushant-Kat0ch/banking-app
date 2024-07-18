import { Routes } from '@angular/router';
import { MenuComponent } from './banking/menu/menu.component';
import { BalanceEnqueryComponent } from './banking/menu/components/balance-enquery/balance-enquery.component';
import { WithdrawalComponent } from './banking/menu/components/withdrawal/withdrawal.component';

export const routes: Routes = [
    {path:'', component: MenuComponent},
    {path:'balance_enquery', component:BalanceEnqueryComponent},
    {path:'balance_widthrawl', component:WithdrawalComponent}
];
