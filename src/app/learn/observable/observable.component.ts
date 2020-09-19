import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})

export class ObservableComponent implements OnInit {
  users: Array<{id: number, name: string}> = [
    { id: 1, name: 'Test1'}, { id: 2, name: 'Test2'}, { id: 3, name: 'Test3'},
  ];
  count;
  buttenTriggered = false;
  constructor(private Route: ActivatedRoute) { }

  ngOnInit(): void {}

  triggerCustomObserbable(): void {
    //
    this.buttenTriggered = true;
    console.log('click');
    const numberObservable = Observable.interval(1000);
    numberObservable.subscribe(count => {
      this.count = count;
      console.log(count);
    });
  }

}
