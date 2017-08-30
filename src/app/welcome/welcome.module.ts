import { NgModule } from '@angular/core';
import { Routes, Route, RouterModule } from '@angular/router';

import { ShareModule } from 'app/share/share.module';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [ShareModule, RouterModule.forChild(routes)],
  exports: [LoginComponent]
})
export class WelcomeModule { }
