import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public routers: Router) { }

  ngOnInit(): void {
  }

  gotToRecipes(): void{
    this.routers.navigate(['/recipes']);
  }

  cart(): void{
    this.routers.navigate(['/shopping-list']);
  }

}
