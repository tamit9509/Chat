import { API } from './constent/content';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'chat';
  users;
  userLength;
  constructor(private htttpClient: HttpClient) {}

  ngOnInit() {
    this.htttpClient.get(API.users).subscribe((result) => {
      this.userLength = result.length;
      this.users = result;
    });
  }
}
