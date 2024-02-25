import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  fruitForm: Fruits = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
  };
  allFruits:Fruits[]=[];
  constructor(private fruitService:FruitsService, private router:Router){}
  ngOnInit(){

  }
  create(){
    this.fruitService.get().subscribe(data=>{
      this.allFruits=data;
      this.fruitForm.id= this.allFruits[this.allFruits.length-1].id + 1;
      this.fruitService.create(this.fruitForm)
      .subscribe({
        next:(data) => {
          console.log(data);this.router.navigate(["/"])
        },
        error:(err) => {
          console.log(err);
        }
      });
  });
  }
}
