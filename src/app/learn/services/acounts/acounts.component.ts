import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {AccountsServices} from '../accounts.services';
import {LoggingServices} from '../logging.services';


@Component({
  selector: 'app-acounts',
  templateUrl: './acounts.component.html',
  styleUrls: ['./acounts.component.css'],
  providers: [LoggingServices]
})
export class AcountsComponent implements OnInit {
  @Input() eachAccount: {name: string, status: string};
  @Input() getIndex: number;
 // @Output() changStatus = new EventEmitter<{index: number, status: string}>();

  constructor(private accountServices: AccountsServices, private loggingServices: LoggingServices) { }

  ngOnInit(): void {
  }

  onClickChangesStatus(status: string): void {
    this.accountServices.changeStatus({
      index: this.getIndex,
      status
    });
    this.loggingServices.loggingMessage(
        this.accountServices.getAccounName(this.getIndex) + ' status changes to ' + status
    );
  }
}
