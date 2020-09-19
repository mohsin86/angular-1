import { Component, OnInit } from '@angular/core';
import {TutorialModel} from './tutorial.model';
import {ServerServices} from '../../services/server.services';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-tutorial',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
    serverLists = [] ;

  constructor(private serverServices: ServerServices) { }

  ngOnInit(): void {
  }

    onServerAdded(serverData: {id: string, serverName: string, serverContent: string}): void {
      this.serverLists.push(
        {
          serverName: serverData.serverName,
          serverContent: serverData.serverContent,
          id: this.generateId()
        }
    );
  }
    onSave(): void{
      //
        this.serverServices.storeServer(this.serverLists).
        subscribe(
            (responses) => {
                console.log(responses);
            },
            (error => console.log(error))
        );
    }
    generateId(): string{
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    onGet(): void{
      this.serverServices.getServer().
      subscribe(
          (response) => {
              console.log(response);
              for (let server of response){
                  this.serverLists = server;
              }
          }
      )
    }
}
