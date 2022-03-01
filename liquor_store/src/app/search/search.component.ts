import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  distributorName: string = '';
  distributors: any;

  constructor(private http: HttpClient) { }

  findDistributor(distributorName: string) {
    this.http
    .get(`https://liquor-store-inventory.herokuapp.com/api/distributor?distributorName=${distributorName}`).subscribe(response => {
      console.log(response)
      this.distributors = response;
    })
  }


  ngOnInit(): void {
  }

}
