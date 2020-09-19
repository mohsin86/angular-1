import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string};
  DataParmas: Params;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params.id,
      name: this.route.snapshot.params.name
    };
    this.DataParmas = this.route.snapshot.queryParams;
    this.route.params.
        subscribe((params: Params ) => {
      this.user = {
        id: params.id,
        name: params.name
      };
    });

    this.route.queryParams.
    subscribe((qparams: Params ) => {
      this.DataParmas = qparams;
    });

  }

}
