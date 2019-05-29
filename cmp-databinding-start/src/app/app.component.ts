import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'test'}];

  evenNumber: number[] = [];
  oddNumber: number[] = [];

  onIntervalFired(value: {emitNumber: number}) {
    if (value.emitNumber % 2 === 0) {
      this.evenNumber.push(value.emitNumber);
    }
    else {
      this.oddNumber.push(value.emitNumber);
    }
  }

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}
