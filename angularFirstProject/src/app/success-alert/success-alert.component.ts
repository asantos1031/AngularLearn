import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-success-alert',
  template: `
    <ul>
      <li>
        <p>
          We saved the world!! We destroyed the asteroid before it hit us!!!
        </p>
      </li>
    </ul>
  `,
  styles: [
    `
      p{
        padding: 20px;
        color: green;
        background-color: palegreen;
        border:1px solid green;
      }
    `
  ]
})
export class SuccessAlertComponent {
}
