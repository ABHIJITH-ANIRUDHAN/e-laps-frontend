import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bestSeller: any = [];
  topUnder40000: any = [];
  topNewArrival: any = [];

  modalTitle: any;
  modalImage: any;
  modalDescription: any;
  modalPrice: any;
  modalOs: any;
  modalRam: any;
  modalDiscount: any;

  displayHome = 'block';
  allProductDisplay = '';
  check = '';
  product:any;
  

  constructor(private api: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.getAllProducts()
    

    this.api.searchkey.subscribe(
      (data: any) => {
        this.check = data
        this.displayAllProduct()
      }
    )
  }

  getAllProducts(){
    this.api.getAllProducts().subscribe(
      (data:any) => {
        data.products.map((products:any) => {
          if(products.category2 == 'Top Best Sellers'){ this.bestSeller.push(products) }
          if(products.category2 == 'Top Under 40000'){ this.topUnder40000.push(products) }
          if(products.category2 == 'Top New Arrival'){ this.topNewArrival.push(products) }
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
      alert('please Login');
    }
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

  // modal
  displayStyle = "none";
  openPopup(product: any) {
    this.modalTitle = product.name;
    this.modalImage = product.image
    this.modalOs = product.os
    this.modalDescription = product.description
    this.modalRam = product.ram;
    this.modalPrice = product.price
    this.modalDiscount = product.discount
    this.displayStyle = "block";
    this.product=product;
   
  }
  closePopup() {
    this.displayStyle = "none";
  }


}
