import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContentInput') serverContentInp;

  onServerCreated(serverName) {
    this.newServerName = serverName.value;
    this.newServerContent = this.serverContentInp.nativeElement.value;
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onBlueprintCreate() {
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  constructor() { }

  ngOnInit() {
  }

}
