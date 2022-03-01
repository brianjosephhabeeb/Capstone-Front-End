import { Component } from '@angular/core';
import { DistributorsComponent } from './distributors/distributors.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  distributors = DISTRIBUTORS;
}
