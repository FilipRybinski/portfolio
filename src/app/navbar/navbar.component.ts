import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  AngularImg!: HTMLImageElement;
  Fragments!: HTMLImageElement;
  ngAfterViewInit(): void {
    this.AngularImg = document.getElementById('AngularImg') as HTMLImageElement;
    this.Fragments = document.getElementById('fragments') as HTMLImageElement;
  }
  ToogleMode() {
    document.body.classList.toggle('dark');
    document.body.classList.contains('dark') ? this.AngularImg.src = "assets/angular2.png" : this.AngularImg.src = "assets/angular.png"
  }
  ToogleAnimation() {
    this.Fragments.classList.contains('hidden') ? this.Fragments.classList.replace('hidden', 'show') : this.Fragments.classList.replace('show', 'hidden');
  }
}
