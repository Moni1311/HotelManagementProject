import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private hotelservice :HotelService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented');
  }
  update(updateform)
  {
    this.hotelservice.updateservice(updateform.value).subscribe();
  }

}