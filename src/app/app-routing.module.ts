import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainComponent } from './main/main.component';
import { DepositmoneyComponent } from './components/depositmoney/depositmoney.component';
import { WithdrawmoneyComponent } from './components/withdrawmoney/withdrawmoney.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TrasferBalanceComponent } from './components/trasfer-balance/trasfer-balance.component';
import { RequestCheckbookComponent } from './components/request-checkbook/request-checkbook.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  {path: 'main', component: MainComponent},
  {path: 'depositmoney', component: DepositmoneyComponent},
  {path:'withdrawmoney', component: WithdrawmoneyComponent},
  {path:'transaction-list',component: TransactionListComponent},
  {path:'transfermoney' , component: TrasferBalanceComponent},
  {path:'requestcheckbook', component: RequestCheckbookComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
