import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';

  allowServer() {
    setTimeout(() => {this.allowNewServer = true; }, 2000);
  }

  constructor() {
    this.allowServer();
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created with name \"' + this.serverName  + '\"';
  }

  onUpdateServerName(event: Event) {
    // @ts-ignore
    this.serverName = event.target.value;
  }

  ngOnInit() {
  }

}
