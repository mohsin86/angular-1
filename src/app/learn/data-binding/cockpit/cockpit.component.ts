import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string} >();
  newServerName = '';

  constructor() { }

  ngOnInit(): void {
  }

  // newServerContent is local reference
  onAddServer(newServerContent: HTMLInputElement): void{
    this.serverCreated.emit({
      serverName: this.newServerName, serverContent: newServerContent.value,
    });

    this.newServerName = '';
    newServerContent.value = '';
  }


}
