import { Component, OnInit } from '@angular/core';
import { HoroscopeService } from './Service/horoscope.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(private service:HoroscopeService){}

  horoscopeRes:any = [];
  horoscopeDate:any = [];
  horoscopeSign:any = [];

  onSubmit(value: any){
    this.service.horoscope(value.name).subscribe(
      (result)=>{

        console.log(result.horoscope);
        console.log(result);
        this.horoscopeRes = result.horoscope;
        this.horoscopeDate = result.date;
        this.horoscopeSign = result.sunsign;
      }
    )
  }


}


