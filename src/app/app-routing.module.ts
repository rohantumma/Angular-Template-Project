import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OopsComponent } from './oops/oops.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: '**', component:OopsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
