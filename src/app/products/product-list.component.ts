import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage:boolean = false;
  filteredProducts: IProduct[];
  
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value:string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2009",
      "description": "Leaf rake with 48-inch wooden handle.",
      "cost": 9.00,
      "price": 19.95,
      "category": "garden",
      "starRating": 2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  },
  {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2010",
      "description": "15 gallon capacity rolling garden cart",
      "cost": 20.00,
      "price": 32.99,
      "category": "garden",
      "starRating": 3,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2013",
      "description": "Curved claw steel hammer",
      "cost": 1.00,
      "price": 8.99,
      "category": "toolbox",
      "starRating": 4,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2009",
      "description": "15-inch steel blade hand saw",
      "cost": 6.95,
      "price": 11.55,
      "category": "garden",
      "starRating": 1,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2002",
      "description": "Standard two-button video game controller",
      "cost": 2.22,
      "price": 35.95,
      "category": "gaming",
      "starRating": 5,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
  ];

  constructor() { }

  ngOnInit() {
    this.filteredProducts =  this.products;
    this.listFilter = 'cart';
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
