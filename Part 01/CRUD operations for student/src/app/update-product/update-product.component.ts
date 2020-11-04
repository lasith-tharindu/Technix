import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id:number;
  data:object = {};
  products = [];
  exist = false;
  productObj:object = {};
  private headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }

  updateProduct(details) {
    this.productObj = {
      "codeid": details.codeid,
      "fname": details.fname,
      "lname":details.lname ,
      "dob":details.dob,
      "username":details.username ,
      "password":details.password
    };
    const url = `${"http://localhost:5555/details"}/${this.id}`;
    this.http.put(url, JSON.stringify(this.productObj), {headers: this.headers})
      .toPromise()
      .then(() => {
        this.router.navigate(['/']);
      })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get("http://localhost:5555/details").subscribe(
      (res: Response) => {
        this.products = res.json();
        for(var i = 0; i < this.products.length ; i++) {
          if(parseInt(this.products[i].id) === this.id) {
            this.exist = true;
            this.data = this.products[i];
            break;
          } else {
            this.exist = false;
          }
        }
      }
    )
  }

}
