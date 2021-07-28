import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent implements OnInit {
  ifNetcracker: boolean = false;
  ifInfosys: boolean = true;
  ifHcl: boolean = true;

  constructor(private titleService: Title) {
    this.titleService.setTitle(
      'Work & Past Experience of Full Stack Developer - Mohit Chaudhary'
    );
  }

  ngOnInit(): void {}

  toggleButton(id: number) {
    switch (id) {
      case 3: {
        this.ifNetcracker = !this.ifNetcracker;
        break;
      }
      case 2: {
        this.ifInfosys = !this.ifInfosys;
        break;
      }
      case 1: {
        this.ifHcl = !this.ifHcl;
        break;
      }
    }
  }
}
