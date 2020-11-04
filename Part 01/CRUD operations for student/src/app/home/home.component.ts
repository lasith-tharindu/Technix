import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: Http) { }
  id:number;
  private headers = new Headers({ 'Content-Type': 'application/json'});

  details = [];
  fetchData = function() {
    this.http.get("http://localhost:5555/details").subscribe(
      (res: Response) => {
        this.details = res.json();
        console.log(this.details = res.json());
      }
    )
  }

  deleteProduct = function(id) {
    if(confirm("Are you sure?")) {
      const url = `${"http://localhost:5555/details"}/${id}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
        .then(() => {
          this.fetchData();
        })
    }
  }

  ngOnInit() {
    this.fetchData();
  }
}
