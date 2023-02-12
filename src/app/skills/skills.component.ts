import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {
  heading!: HTMLElement;
  square!: HTMLElement;
  content!: HTMLElement;
  ngAfterViewInit(): void {
    this.heading = document.getElementById('heading') as HTMLElement;
    this.square = document.getElementById('square') as HTMLElement;
    this.content = document.getElementById('skill_content') as HTMLElement;
  }

  async ToogleSkills() {
    this.square.animate([
      // keyframes
      { transform: 'Scale(1)', opacity: '1' },
      { transform: 'Scale(0)', opacity: '0' }
    ], {
      // timing options
      duration: 500,
      fill: 'both'
    })
    setTimeout(() => {
      this.heading.style.display = 'block';
      this.square.style.display = 'none';
      this.content.style.display = 'flex';
    }, 500);

  }
}
