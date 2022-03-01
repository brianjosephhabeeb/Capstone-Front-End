import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  bottleName: string = '';
  distributorName: string = '';

  constructor() { }

  findDistributor(distributorName: string) {

  }

  findBottle(bottleName: string) {
    
  }

  ngOnInit(): void {
  }

}
