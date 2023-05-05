import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-under40000',
  templateUrl: './under40000.component.html',
  styleUrls: ['./under40000.component.css']
})
export class Under40000Component implements OnInit {

  under40000: any = [];

  modalTitle: any;
  modalImage: any;
  modalDescription: any;
  modalPrice: any;
  modalOs: any;
  modalRam: any;
  modalDiscount: any;

  displayHome = 'block'
  allProductDisplay = '';
  check = '';
  product:any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.getAllFiction()

    this.api.searchkey.subscribe(
      (data: any) => {
        this.check = data
        this.displayAllProduct()
      }
    )

  }

  
  displayAllProduct() {
    if (this.check == '') {
      this.allProductDisplay = "none"
      this.displayHome = 'block'
    }
    else {
      this.allProductDisplay = "block"
      this.displayHome = 'none'
    }
  }

  getAllFiction() {
    this.api.getAllProducts().subscribe(
      (data:any) => {
        data.products.map((products:any) => {
          if(products.category == 'Under 40000'){this.under40000.push(products)}
        })
      }
    )
  }

  addToWishlist(product: any) {
    if(localStorage.getItem('userLogin') == 'true'){
      const email = localStorage.getItem('currentEmail');
      this.api.addWishToUser(product, email).subscribe(
        (result:any) => {
          alert(result.message)
        },
        (result:any) => {
          alert(result.error.message)
        }
      )
    }else{
      alert('please Login')
    }
  }

  addToCart(product: any) {
    if(localStorage.getItem('userLogin') == 'true'){
      const email = localStorage.getItem('currentEmail');
      this.api.addCartToUser(product, email).subscribe(
        (result:any) => {
          alert(result.message)
        },
        (result:any) => {
          alert(result.error.message)
        }
      )
    }else {
      alert('please Login')
    }
  }
  // modal
  displayStyle = "none";
  openPopup(product: any) {
    this.modalTitle = product.name;
    this.modalImage = product.image
    this.modalOs = product.os
    this.modalDescription = product.description
    this.modalRam= product.ram;
    this.modalPrice = product.price
    this.modalDiscount = product.discount
    this.displayStyle = "block";
    this.product=product;

  }
  closePopup() {
    this.displayStyle = "none";
  }

}


