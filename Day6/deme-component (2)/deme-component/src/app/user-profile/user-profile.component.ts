import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile = {
    name: "Huỳnh Văn Toàn",
    birthdate: "--/--/----",
    contact: "",
    email: "toan@codegym.vn"
  }

  constructor() { }

  ngOnInit(): void {
  }

  xuLyHoSo(formModel: NgForm) {
    if (!formModel.valid) {
      console.log('Ho so bi tu choi!')
    } else {
      console.log('Ho so da duoc nhan!', formModel.valid);
    }
  }
}
