import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export  class ServerComponent {
  server = 'my server';
  serverId = 666;
  serverStatus = 'offline';
  userName: any = 'UserName';
  userNameUpdateText = '';
  userNameUpdated = false;

  constructor() {
    this.serverStatus =  Math.random() > 0.5 ? 'online' : 'offline' ;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  userNameUpdate() {
    if (this.userName === 'UserName' || this.userName === '') {
      return false;
    } else { return true; }
  }

  onUpdateUserName() {
    this.userNameUpdated = true;
    this.userNameUpdateText =  this.userName;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
