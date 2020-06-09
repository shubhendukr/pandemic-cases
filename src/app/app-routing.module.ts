import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PandemicHomeComponent } from './components/pandemic-home/pandemic-home.component';
import { NovelCoronavirusComponent } from './components/novel-coronavirus/novel-coronavirus.component';

const routes: Routes = [
  { path: '', component: PandemicHomeComponent },
  { path: 'covid19', component: NovelCoronavirusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
