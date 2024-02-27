import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{
  catForm: Category = {
    id: 0,
    name: '',
    description: '',
  };
  allCat:Category[]=[];
  constructor(private service:CategoryService, private router:Router){}
  ngOnInit(){

  }
  create(){

      this.service.create(this.catForm)
      .subscribe({
        next:(data) => {
          console.log(data);this.router.navigate(["/category/home"])
        },
        error:(err) => {
          console.log(err);
        }
      });

  }
}
