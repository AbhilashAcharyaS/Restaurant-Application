import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { CustomerService } from '../services/customer.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
  constructor(private cartService: CartService ) { 
    this.setCart();
  }
  ngOnInit(): void {
    
  }

  addCustomer(){
    alert("Order placed, Thank you")
  }


  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

}