import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HomeService } from '../shared/home.service';
import { HomeModel } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private data: Array<HomeModel>;

  constructor(private _service: HomeService) { }

  ngOnInit() {
    this._service.getHomeData().subscribe(
      data => this.data = data
    );
  }

}
