import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../fruits.service';
import { Fruits } from '../fruits';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



declare var window: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  allFruits:Fruits[]=[];

  deleteModal: any;
  idTodelete: number = 0;

  constructor(private service:FruitsService){}
  ngOnInit(): void {

    this.deleteModal = new window.bootstrap.Modal(document.getElementById('deleteModal')
    );
    this.get();
    
  }
  get() {
    this.service.get().subscribe((data) => {
      this.allFruits = data;
    });

  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.service.delete(this.idTodelete).subscribe({
      next: (data) => {console.log(this.idTodelete)
        this.allFruits = this.allFruits.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}
