import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    trigger('chatbox', [
      transition('*=>*', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate(500, style({ opacity: 1, transform: 'translateY(0px)' }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'chat';

  constructor() { }

  ngOnInit() { }
}
