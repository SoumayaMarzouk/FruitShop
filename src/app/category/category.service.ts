import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable()
export class CategoryService {

  constructor(private http:HttpClient) { }
  get() {
    return this.http.get<Category[]>('http://localhost:8080/categories');
  }
  create(payload: Category) {
    return this.http.post<Category>('http://localhost:8080/categories', payload);
  }
  getById(id: number) {
    return this.http.get<Category>('http://localhost:8080/categories/'+id);
   }
    
   update(payload:Category){
    return this.http.put('http://localhost:8080/categories/'+payload.id,payload);
   }
   delete(id:number){
    return this.http.delete<Category>(`http://localhost:8080/categories/${id}`);
 }
}
