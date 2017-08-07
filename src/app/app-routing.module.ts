import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'view',
    loadChildren: './view/view.module#ViewModule'
  }, {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  }, {
    path: 'welcome',
    loadChildren: './welcome/welcome.module#WelcomeModule'
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'view/manual/home'
  }, {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
