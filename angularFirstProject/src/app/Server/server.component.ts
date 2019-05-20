import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    h3 {
      color: #ff42f5;
    }
  `]
})

export class ServerComponent {
  serverId = 10;
  serverStatus = 'Online';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }
  getServerStatus() {

    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
}
