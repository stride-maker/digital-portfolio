import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle(
      'Mohit | Skill & Expertise of Full Stack Developer'
    );
  }

  ngOnInit(): void {}
}
