import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private hotelservice: HotelService) { }

  ngOnInit(): void {
  }

  deletedata(deleteform)
  {
    this.hotelservice.deleteservice(deleteform.value).subscribe();
  }

}
