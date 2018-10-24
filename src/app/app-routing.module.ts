import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component'

const routes:Routes = [
	{path: 'products',component: ProductsComponent
	};

];




@NgModule({
	exports : [RouterModule],
	imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
