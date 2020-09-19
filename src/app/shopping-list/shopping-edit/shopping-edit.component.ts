import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  name: string;
  amount: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.form);
  }

}
