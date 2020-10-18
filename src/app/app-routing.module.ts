import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms/forms.component'
import { AboutComponent } from './about/about.component'

const routes: Routes = [
  { path: 'form', component: FormsComponent },
  { path: 'contact', component: AboutComponent },
  { path: '', component: AboutComponent },
  { path: '**', component: AboutComponent }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
