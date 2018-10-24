import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from'./product';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs';
import {catchError,map,tap} from 'rxjs/operators';



const httpOptions ={
	headers : new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  private productsUrl = 'api/products';



  private handleError<T> (operation = 'operation', result?:T){
  	return (error: any): Observable<T> => {
  		console.error(error);

  		return of(result as T);
  	}
  }


  getProducts(): Observable<Product[]>{
  	return this.http.get<Product[]>(this.productsUrl)
  	  .pipe(
  	  	tap(products=> console.log('Fetched products.')),
  	  	catchError(this.handleError('getProducts',[]))
  	  	);

  }


  getProduct( id : number): Observable<Product>{
  	const url = 'api/products/' + id.toString() ;

  	return this.http.get<Product>(url).pipe(
  		tap(product => console.log('Fetched product of id:'+id.toString(),product)),
  		catchError(this.handleError<Product>('getProduct id =' + id.toString() ))
  		);
  	}

  updateProduct(product): Observable<any>{

  	return this.http.put(this.productsUrl, product , httpOptions ).pipe(
  		tap(_=>console.log('Updated product of id'+ product.id.toString()+'!')),
  		catchError(this.handleError<any>('updateProduct'))
  	);
  		
  }

  addProduct( product : Product): Observable<Product>{
  	return this.http.post<Product>(this.productsUrl,product,httpOptions).pipe(
  		tap( (product:Product) => console.log('Added product with id' + product.id.toString() +'!')),
  		catchError(this.handleError<Product>('addProduct'))
  	);
  }

  deleteProduct(productId:number): Observable<Product>{
  	const url = 'api/products/' + productId.toString();
 	return this.http.delete<Product>(url, httpOptions).pipe(
 		tap(_ => console.log('Deleted product of id'+productId.toString() )),
 		catchError(this.handleError<Product>('deleteProduct'))
 		);
  }
}