import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PandemicHomeComponent } from './components/pandemic-home/pandemic-home.component';
import { CoronavirusGlobalComponent } from './components/novel-coronavirus/coronavirus-global/coronavirus-global.component';

const routes: Routes = [
  { path: '', component: PandemicHomeComponent },
  { path: 'coronavirus', component: CoronavirusGlobalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
