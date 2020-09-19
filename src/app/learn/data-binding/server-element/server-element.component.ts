import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('whileListServer') list: {id: string, serverName: string, serverContent: string};

  constructor() { }

  ngOnInit(): void {
  }


}
