import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export  class ServerComponent {
  server = 'my server';
  serverId = 666;
  serverStatus = 'offline';
  userName: any = 'Please update UserName !!!!';

  getServerStatus() {
    return this.serverStatus;
  }

  userNameUpdate() {
    if (this.userName === 'Please update UserName !!!!' || this.userName === '') {
      return false;
    } else { return true; }
  }

  onUpdateUserName() {
    this.userName = 'the updated user name is :' + this.userName;
  }
}
