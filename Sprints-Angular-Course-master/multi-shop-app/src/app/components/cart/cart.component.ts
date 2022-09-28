import { Component, OnInit } from '@angular/core';
import { CartLine } from 'src/app/interfaces/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interfaces/product'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
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


  deleteLine(id: number) {
    return this.cartservice.removeLine(id)

  }
  deletepro(index: number) {
    return this.cartservice.removeProduct(index)
  }
  // sum() {
  //   return this.cartservice.gettotal();
  // }

  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
  }

}
