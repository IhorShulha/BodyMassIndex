import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistComponent } from './hist/hist.component';


const routes: Routes = [
  { path: 'hist', component: HistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
