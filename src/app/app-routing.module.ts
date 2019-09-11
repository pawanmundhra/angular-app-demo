import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferenceDataComponent } from './reference-data/reference-data.component';
import { LoginComponent } from './login/login.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';


const routes: Routes = [
  {
    path: 'position-data',
    loadChildren: () => import('./position-data/position-data.module').then(mod => mod.PositionDataModule)
  },
  { path: 'login', component: LoginComponent},
  { path: 'login-reactive', component: LoginReactiveComponent},
  { path: 'reference-data/:version', component: ReferenceDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
