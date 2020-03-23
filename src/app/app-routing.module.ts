import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "user", loadChildren: () => import('./pages/pages-after-login/pages-after-login.module').then(m => m.PagesAfterLoginModule) },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: '**', redirectTo: 'login' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
