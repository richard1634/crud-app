import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
	createDb(){
	const products = [
{
	id:1,
	time:'1:20PM',
	title:'Movie Ticket',
	price:650,
}
,
{
	id:2,
	time:'2:10PM',
	title:'MacBook Pro',
	price:2500,
}
,
{
	id:3,
	time:'3:00PM',
	title:'Lawn Mower',
	price:250,
}
];
	return { products };
	}
  constructor() { }
}
