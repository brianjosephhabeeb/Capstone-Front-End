import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  distributorName: any = '';
  distributors: any;
  searchedDistributor: any;
  search: any;

  constructor(private http: HttpClient) { }

  findDistributor() {
    this.http
    .get('https://liquor-store-inventory.herokuapp.com/api/distributor')
    .subscribe((response) => {
      console.log(response)
      this.distributors = response;
    })
  }


  ngOnInit(): void {
  }

}
