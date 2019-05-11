import { API } from './../../constent/content';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-user-list-bar',
  templateUrl: './user-list-bar.component.html',
  styleUrls: ['./user-list-bar.component.less'],
  animations: [
    trigger('fade', [
      transition('void=>*', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(500, style({ opacity: 1, transform: 'translateY(0px)' }))
      ])
    ]),
    trigger('getdown', [
      transition('*=>*', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate(500, style({ opacity: 1, transform: 'translateY(0px)' }))
      ])

    ])
  ]
})
export class UserListBarComponent implements OnInit {
  users = [];
  users2 = [];
  userLength;
  search;
  name = '';
  page = 1;
  constructor(private htttpClient: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.search = this.fb.group({
      name: ['']
    });
    this.getUsers();
  }
  getUsers() {
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
