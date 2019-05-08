import { API } from './constent/content';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'chat';
  users = [];
  users2 = [];
  userLength;
  search;
  name = '';
  constructor(private htttpClient: HttpClient, private fb: FormBuilder) {}

  ngOnInit() {
    this.search = this.fb.group({
      name: ['']
    });
    this.htttpClient.get(API.users).subscribe((result) => {
      let i = 0;
      while (result[i]) {
        this.users.push(result[i]);
        i++;
      }
      this.users2 = [...this.users];
      this.userLength = this.users.length;
    });
  }

  keyup(event) {
    console.log(this.name);

    if (!this.name) {
      this.users = [...this.users2];
      return;
    }

    const regex = new RegExp(`^${this.name}*`, 'gi');
    this.users = [];
    this.users = this.users2.filter((obj) => {
      return regex.test(obj.name);
    });
  }
}
