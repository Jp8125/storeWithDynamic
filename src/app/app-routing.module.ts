import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCreatorComponent } from './Components/form-creator/form-creator.component';
import { ListComponent } from './Components/list/list.component';

const routes: Routes = [
  { path: 'add', component: FormCreatorComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
