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
  serverCreated = false;
  servers = ['testServer', 'Test server 2'];

  allowServer() {
    setTimeout(() => {this.allowNewServer = true; }, 2000);
  }

  constructor() {
    this.allowServer();
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created with name \"' + this.serverName  + '\"';
  }

  ngOnInit() {
  }

}
