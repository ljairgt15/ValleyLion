import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/constants/AppConstants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  whatsappUrl: string = AppConstants.WHATSAPP_URL;
  facebookUrl: string = AppConstants.FACEBOOK_URL;
  instagramUrl: string = AppConstants.INSTAGRAM_URL;
  tiktokUrl: string = AppConstants.TIKTOK_URL;
  cellPhoneNumber: string = "0"+AppConstants.CELLPHONE_NUMBER;
  academyName:string = AppConstants.ACADEMY_NAME;

  contactForma: FormGroup;
  constructor(private fb: FormBuilder, private router:Router) {
    this.contactForma = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForma.valid) {
      const formData = this.contactForma.value;
      console.log('Form Data Submitted:', formData);
      this.router.navigate(['/noticias']);
    } else {
      console.log('Form is not valid');
    }
  }

  ngOnInit(): void {
  }

}
