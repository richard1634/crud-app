import { Component, OnInit, Input } from '@angular/core';
import{Product} from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product; //take in input from selected product

  constructor() { }

  ngOnInit() {
  }

}
