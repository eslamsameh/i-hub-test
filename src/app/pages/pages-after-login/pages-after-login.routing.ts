import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PagesAfterLoginComponent } from './pages-after-login.component';
import { UsersGuard } from 'src/app/commen/users.guard';



const routes: Routes = [
    {
        path: "", 
        component: PagesAfterLoginComponent,
        children: [
            { path: "users", component: UsersComponent, canActivate: [UsersGuard] },
            { path: "change-pass", component: ChangePasswordComponent, canActivate: [UsersGuard] },
            { path: "", redirectTo: "users", pathMatch: "full" }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesAfterLoginRoutingModule { }
