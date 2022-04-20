import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';


@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
 hoteldetails

  constructor(private hotelservice:HotelService) {this.fetchdata();}

  ngOnInit(): void {
  }
  fetchdata()
  {
    this.hotelservice.fetchservice().subscribe(
      (resp) => { this.hoteldetails=resp; }
    );
  }
}