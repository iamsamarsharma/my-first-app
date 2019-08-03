import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export  class ServerComponent {
  server = 'my server';
  serverId = 666;
  serverStatus = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
