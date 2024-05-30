import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/constants/AppConstants';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  whatsappUrl: string = AppConstants.WHATSAPP_URL;
  facebookUrl: string = AppConstants.FACEBOOK_URL;
  instagramUrl: string = AppConstants.INSTAGRAM_URL;
  tiktokUrl: string = AppConstants.TIKTOK_URL;
  cellPhoneNumber: string = "0"+AppConstants.CELLPHONE_NUMBER;
  academyName:string = AppConstants.ACADEMY_NAME;

  constructor() { }

  ngOnInit(): void {
  }

}
