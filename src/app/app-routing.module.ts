import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  { path:'', redirectTo:'/list', pathMatch:'full'},
  { path: 'list', component:ListComponent},
  { path: 'create', component:CreateComponent},
  { path: 'edit/:id', component:EditComponent},
  { path: 'view/:id', component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
