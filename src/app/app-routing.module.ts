import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'view',
    loadChildren: 'app/view/view.module#ViewModule',
  }, {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule'
  }, {
    path: 'welcome',
    loadChildren: 'app/welcome/welcome.module#WelcomeModule'
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome/login'
  }, {
    path: '**',
    redirectTo: '/welcome/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
