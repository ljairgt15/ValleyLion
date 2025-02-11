import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/constants/AppConstants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa Router
import Swal from 'sweetalert2';

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
  gmail:string=AppConstants.GMAIL;

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
      Swal.fire({
        title: "Excelente!",
        text: "Pronto nos comunicaremos contigo!",
        icon: "success"
      });
      this.contactForma.reset();
    } else {
      Swal.fire({
        title: "Oops...",
        text: "Revisa la información ingresada",
        icon: "error"
      });
    }
  }

  ngOnInit(): void {
  }

}
