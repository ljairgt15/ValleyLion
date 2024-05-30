import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/constants/AppConstants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder) {
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
      // Aquí puedes agregar la lógica para enviar los datos al servidor, por ejemplo usando HttpClient
      // this.httpClient.post('your-api-url', formData).subscribe(response => {
      //   console.log('Response from server:', response);
      // });
    } else {
      console.log('Form is not valid');
    }
  }

  ngOnInit(): void {
  }

}
