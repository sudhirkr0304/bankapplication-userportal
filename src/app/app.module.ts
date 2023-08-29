import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DepositmoneyComponent } from './components/depositmoney/depositmoney.component';
import { WithdrawmoneyComponent } from './components/withdrawmoney/withdrawmoney.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TrasferBalanceComponent } from './components/trasfer-balance/trasfer-balance.component';
import { RequestCheckbookComponent } from './components/request-checkbook/request-checkbook.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    MainComponent,
    NavbarComponent,
    DepositmoneyComponent,
    WithdrawmoneyComponent,
    TransactionListComponent,
    TrasferBalanceComponent,
    RequestCheckbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
