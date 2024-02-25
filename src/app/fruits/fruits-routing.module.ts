import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';

export const froutes: Routes = [
  {
    path: 'fruits/home',
    component: HomeComponent,
  },
  {
    path: 'fruits/create',
    component: CreateComponent,
  },
  {
    path:'fruits/edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(froutes)],
  exports: [RouterModule]
})
export class FruitsRoutingModule { }
