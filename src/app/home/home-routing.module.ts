import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { CartComponent } from './cart/cart.component';

import { Under40000Component } from './under40000/under40000.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { OrdersComponent } from './orders/orders.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { WishlistComponent } from './wishlist/wishlist.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bestSellers', component: BestSellersComponent },
  { path: 'under40000', component: Under40000Component },
  { path: 'newArrival', component: NewArrivalComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'cart', component: CartComponent },
  { path: 'allProducts', component: AllProductsComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent },
  { path: 'orders', component:OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
