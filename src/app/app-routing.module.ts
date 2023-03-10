import { NgModule } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
const routes: Routes = [
  { redirectTo: 'home', path: '', pathMatch: 'full' },
  { path: 'home', component: ContentComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'curriculum', component: CurriculumComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
