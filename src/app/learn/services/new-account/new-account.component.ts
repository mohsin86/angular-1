import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';

import {LoggingServices} from '../logging.services';
import {AccountsServices} from '../accounts.services';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingServices]
})

export class NewAccountComponent implements OnInit {
  @ViewChild('accountsName') accountsNameRef: ElementRef ;
  @ViewChild('accountsStatus') accountsStatusRef: ElementRef;
 // @Output() accounsInfo = new EventEmitter<{name: string, status: string}>();

  constructor(private accountServices: AccountsServices, private loggingServices: LoggingServices) { }

  ngOnInit(): void {}

  createAccounts(accountsNameRef: HTMLInputElement, accountsStatusRef: HTMLSelectElement): void {
      // this.accounsInfo.emit({
     //   name: this.accountsNameRef.nativeElement.value,
      //   status: this.accountsStatusRef.nativeElement.value
     // });
     this.accountServices.addAccount({
         name: this.accountsNameRef.nativeElement.value,
         status: this.accountsStatusRef.nativeElement.value
     })

     this.loggingServices.loggingMessage(this.accountsNameRef.nativeElement.value + 'Accounts Created')

     this.accountsNameRef.nativeElement.value = '';
     this.accountsStatusRef.nativeElement.value = '';
  }
}
