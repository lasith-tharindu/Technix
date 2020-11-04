import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: Http) { }
  confirmationString:string = "New Student Details has been added";
  isAdded: boolean = false;
  productObj:object = {};

  addNewProduct = function(details) {
    this.productObj = {
      "codeid": details.codeid,
      "fname": details.fname,
      "lname":details.lname,
      "dob":details.dob,
      "username":details.username ,
      "password":details.password
    }
    this.http.post("http://localhost:5555/details/", this.productObj).subscribe((res:Response) => {
      console.log(res);
      this.isAdded = true;
    })
  }

  ngOnInit() {
  }

}
