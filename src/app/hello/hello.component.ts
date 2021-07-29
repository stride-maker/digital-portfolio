import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle(
      'Full Stack Developer, Bengaluru - Mohit Chaudhary'
    );
  }

  ngOnInit(): void {}
}
