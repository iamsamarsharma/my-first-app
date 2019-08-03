import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server is created';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit() {
  }

  onCreatServer() {
    this.serverCreationStatus =  'A new server is created';
  }

  onUpdateName($event: any) {
    console.log(event);
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
