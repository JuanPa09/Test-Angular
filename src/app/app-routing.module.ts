import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { FormComponent } from './components/form/form.component'

const routes: Routes = [
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: '**',
    redirectTo: 'detail'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
