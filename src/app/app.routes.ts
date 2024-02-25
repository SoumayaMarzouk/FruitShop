import { Routes } from '@angular/router';
import { HomeComponent } from './fruits/home/home.component';
import { CreateComponent } from './fruits/create/create.component';
import { EditComponent } from './fruits/edit/edit.component';
import {FruitsModule} from './fruits/fruits.module'
export const routes: Routes = [
    
    { path: '',   redirectTo: 'fruits/home', pathMatch: 'full' },
    {path:'',component : HomeComponent},

];
