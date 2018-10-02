import { Injectable } from '@angular/core';
import { Product } from './product'
import { PRODUCTS } from './mock-products'
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private messagesService: MessagesService) { }

  getProducts(): Observable<Product[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messagesService.add('ProductService: fetched products');
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product> {
    // TODO: send the message _after_ fetching the hero
    this.messagesService.add(`ProductService: fetched product id=${id}`);
    return of(PRODUCTS.find(hero => hero.id === id));
  }

}
