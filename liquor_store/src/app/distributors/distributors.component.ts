import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css']
})
export class DistributorsComponent implements OnInit {
  distributorIndex: string|null = ' ';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      this.distributorIndex = params.get('id');
    })
  }

}
