import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {PagesAfterLoginRoutingModule} from './pages-after-login.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesAfterLoginComponent } from './pages-after-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent, ChangePasswordComponent, PagesAfterLoginComponent],
  imports: [
    CommonModule,
    PagesAfterLoginRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesAfterLoginModule { }
