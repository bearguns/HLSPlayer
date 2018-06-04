import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
    <header class="header">
      <mat-toolbar>
        <span class="play-icon"></span>
      </mat-toolbar>
    </header>
  `,
  styleUrls: ['./app-toolbar.component.scss']
})
export class AppToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
