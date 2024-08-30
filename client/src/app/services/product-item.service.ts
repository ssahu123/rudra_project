import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ProductItem } from '../models/production.model';

const baseUrl = 'http://localhost:8080/api/productions';

@Injectable({
  providedIn: 'root',
})
export class ProductItemService {
  productionObservable: Subject<any>
  constructor(private http: HttpClient) {
    this.productionObservable = new Subject<any>;
  }

  getProductionObservable() {
    return this.productionObservable;
  }
  
  dispatchProductionObservable(data:any) {
    this.productionObservable.next(data);;
  }

  getAll(): Observable<ProductItem[]> {
    return this.http.get<ProductItem[]>(baseUrl);
  }

  get(id: any): Observable<ProductItem> {
    return this.http.get<ProductItem>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<ProductItem[]> {
    return this.http.get<ProductItem[]>(`${baseUrl}?itemName=${title}`);
  }
}
