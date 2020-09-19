import { Component, OnInit } from '@angular/core';

import {LoggingServices} from './logging.services';
import {AccountsServices} from './accounts.services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [AccountsServices, LoggingServices]
})
export class ServicesComponent implements OnInit {
  accounts: {name: string, status: string}[];

  constructor(private accountServices: AccountsServices, private loggingServices: LoggingServices) { }

  ngOnInit(): void {
    this.accounts = this.accountServices.accounts;
  }

  onAccountsChanged(statusData: {index: number, status: string}): void {
    this.accounts[statusData.index].status = statusData.status;
    this.loggingServices.loggingMessage(
        this.accounts[statusData.index].name + ' status changes to ' + this.accounts[statusData.index].status
    );
  }

  accountCreated(accData: {name: string, status: string}): void {
    this.accounts.push(accData);
  }
}
