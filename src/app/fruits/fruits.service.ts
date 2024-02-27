import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruits } from './fruits';

@Injectable()
export class FruitsService {
  f:Fruits[]=[];
  constructor(private http:HttpClient) { }
  get() {
    return this.http.get<Fruits[]>('http://localhost:8080/articles');
  }
  create(payload: Fruits) {
    //var res;
    //this.get().subscribe(data=>{this.f=data; payload.id=this.f[-1].id + 1;});
    return this.http.post<Fruits>('http://localhost:8080/articles', payload);
  }
  getById(id: number) {
    return this.http.get<Fruits>('http://localhost:8080/articles/'+id);
   }
    
   update(payload:Fruits){
    return this.http.put('http://localhost:8080/articles/'+payload.id,payload);
   }
   delete(id:number){
    return this.http.delete<Fruits>(`http://localhost:8080/articles/${id}`);
 }
}
