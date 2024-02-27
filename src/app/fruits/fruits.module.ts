import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {FruitsRoutingModule} from './fruits-routing.module'
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FruitsService } from './fruits.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,FormsModule,FruitsRoutingModule,HttpClientModule
  ],
  providers:[FruitsService]
})
export class FruitsModule { }
