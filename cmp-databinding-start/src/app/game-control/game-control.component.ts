import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  gameStarted = false;
  emitNumber = 0;
  @Output() numberEvent = new EventEmitter<{emitNumber: number}>();

  myInterval: number;

  startGame() {
    this.gameStarted = true;
    this.myInterval = setInterval(() => this.numberEvent.emit({emitNumber: ++this.emitNumber}) , 1000);
  }

  stopGame() {
    this.gameStarted = false;
    clearInterval(this.myInterval);
  }

  constructor() { }

  ngOnInit() {
  }

}
