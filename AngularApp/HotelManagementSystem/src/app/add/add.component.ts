import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  constructor(private hotelservice : HotelService) { }

  
  ngOnInit(): void {
  }

  insertdata(insertform)
  {
    this.hotelservice.insertservice(insertform.value).subscribe();
  }

}