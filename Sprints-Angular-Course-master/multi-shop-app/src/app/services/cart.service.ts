import { Injectable } from '@angular/core';
import { CartLine } from '../interfaces/cart-item';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {


  cartlin1 = new CartLine({
    id: 1,
    name: 'pro1',
    price: 250,
    discount: 0.2,
    rating: 100,
    ratingCount: 50,
    imageUrl: '/assets/img/product-1.jpg',
    size: 's',
    color: 'red',
  })
  cartLines: Array<CartLine> = [
    this.cartlin1
  ];


  constructor() { }



  getProductCount(): number {
    //return this.cartLines.map((x) => x.count).reduce((a, v) => (a += v));
    return this.cartLines.length;
  }

  addProduct(product: Product) {
    let itemFound = false;
    for (let i = 0; i < this.cartLines.length; i++) {
      if (this.cartLines[i].product.id === product.id) {
        this.cartLines[i].count += 1;
        itemFound = true;
      }
    }
    if (!itemFound) {
      this.cartLines.push(new CartLine(product));
    }
  }

  //Implement function removeProduct



  removeProduct(productId: number) {

    let index = this.cartLines.findIndex((x) => x.product.id == productId);

    for (let i = 0; i < this.cartLines.length; i++) {
      if (this.cartLines[i].product.id === productId) {
        if (this.cartLines[i].count <= 1) {
          return this.removeLine(i);
        }
        this.cartLines[i].count -= 1;
      }
    }

  }
  //Implement function removeLine
  removeLine(index: number) {
    this.cartLines.splice(index, 1);
  }
  gettotal() {
    // return this.cartLines.map((l) => l.getTotal()).reduce((a, v) => (a += v))
    let index = this.cartLines.map((l) => l.getTotal()).reduce((a, v) => (a += v));
    return index
  }
  getTotalWShipping() {
    return this.gettotal() + 10;
  }
}

