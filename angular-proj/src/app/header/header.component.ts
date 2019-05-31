import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() showPage = new EventEmitter<string>();


  onHeaderClick(header: string) {
    this.showPage.emit(header);
  }
}
