import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCreatorComponent } from './Components/form-creator/form-creator.component';
import { ListComponent } from './Components/list/list.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  // { path: 'add', component: FormCreatorComponent },
  // { path: 'list', component: ListComponent },
  { path: '', redirectTo:'/login',pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'chat', component: ChatComponent,canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
