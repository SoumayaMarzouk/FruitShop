import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { RouterModule } from '@angular/router';
declare var window: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  allCat:Category[]=[];

  deleteModal: any;
  idTodelete: number = 0;

  constructor(private service:CategoryService){}
  ngOnInit(): void {

    this.deleteModal = new window.bootstrap.Modal(document.getElementById('deleteModal')
    );
    this.get();
    
  }
  get() {
    this.service.get().subscribe((data) => {
      this.allCat = data;
    });

  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.service.delete(this.idTodelete).subscribe({
      next: (data) => {console.log(this.idTodelete)
        this.allCat = this.allCat.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}
