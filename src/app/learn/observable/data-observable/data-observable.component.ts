import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-data-observable',
  templateUrl: './data-observable.component.html',
  styleUrls: ['./data-observable.component.css']
})
export class DataObservableComponent implements OnInit {
  user: { id: number, name: string };
  constructor(private  Route: ActivatedRoute) { }
  changeRoute;
  ngOnInit(): void {
    console.log(this.user);
    console.log(this.Route.snapshot.params);
    this.user = {
      id: this.Route.snapshot.params.id ? this.Route.snapshot.params.id : this.user.id,
      name: this.Route.snapshot.params.name ? this.Route.snapshot.params.name : this.user.name,
    }

    this.changeRoute =  this.Route.params.subscribe((params: Params) => {
      console.log(params);
      this.user = {
        id: params.id,
        name: params.name,
      };

    });
  }

}
