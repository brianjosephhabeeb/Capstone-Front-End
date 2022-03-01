import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css']
})
export class DistributorsComponent implements OnInit {
  distributor: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.paramMap
    // .subscribe(params => {
    //   this.distributor = DISTRIBUTORS.find(distributor => {
    //   let paramId: string = params.get('id') || '';
    //   return distributor.id === parseInt(paramId);
    //   })
    // })
  }

}
