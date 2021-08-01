import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle(
      'Personal Project Work of Full Stack Developer - Mohit Chaudahry'
    );
  }

  ngOnInit(): void {}
}
