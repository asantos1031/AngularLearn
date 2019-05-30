import { Component } from '@angular/core';
import {Pages} from './pages.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activePage = 'recipe';

  changeToPage(newpage: string) {
    this.activePage = newpage;
  }
}
