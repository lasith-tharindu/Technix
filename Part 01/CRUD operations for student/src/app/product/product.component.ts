import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: Http) { }
  confirmationString:string = "New Student  Details has been added";
  isAdded: boolean = false;
  productObj:object = {};

  addNewProduct = function(detail) {
    this.productObj = {
      "codeID": detail.codeID,
      "fristname": detail.fristname,
      "lastname":detail.lastname ,
      "dob":detail.dob,
      "username":detail.username ,
      "password":detail.password
    }
    this.http.post("http://localhost:55555/details/", this.productObj).subscribe((res:Response) => {
      this.isAdded = true;
    })
  }

  ngOnInit() {
  }

}
