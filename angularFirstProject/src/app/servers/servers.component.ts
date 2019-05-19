import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverID: number;

  allowServer() {
    setTimeout(() => {this.allowNewServer = true; }, 2000);
  }

  constructor() {
    this.allowServer();
  }

  ngOnInit() {
  }

}
