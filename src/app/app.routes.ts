import { Routes } from '@angular/router';
import { HomeComponent } from './fruits/home/home.component';
import { CreateComponent } from './fruits/create/create.component';
import { EditComponent } from './fruits/edit/edit.component';
import {FruitsModule} from './fruits/fruits.module'
export const routes: Routes = [
    
    
    //{path:'',component : HomeComponent},
    {
        path: '',
        loadChildren: () => import('./fruits/fruits.module').then(m => m.FruitsModule),
      },
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule),
      }

];
