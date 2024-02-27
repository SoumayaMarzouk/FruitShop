import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Fruits } from '../../fruits/fruits';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  catForm: Category = {
    id: 0,
    name: '',
    description: '',
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private service: CategoryService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.service.getById(id).subscribe((data) => {
      this.catForm = data;
    });
  }
  update() {
    console.log(this.catForm);
    this.service.update(this.catForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/category/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
