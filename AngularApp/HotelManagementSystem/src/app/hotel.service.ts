import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  constructor(private http : HttpClient) { }
  link='http://localhost:9091'

  public updateservice(updatedata)
  {
    return this.http.post(this.link+'/update',updatedata);
  }
  public insertservice(insertdata)
  {
    return this.http.post(this.link+'/insert',insertdata);
  }
  public deleteservice(deletedata)
  {
    return this.http.post(this.link+'/delete',deletedata);
  }
  public fetchservice()
  {
    return this.http.get(this.link+'/fetch');
  }
}