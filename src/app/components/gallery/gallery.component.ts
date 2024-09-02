import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images = [
    { url: 'path/to/image1.jpg', alt: 'Descripción 1' },
    { url: 'path/to/image2.jpg', alt: 'Descripción 2' },
    // Agrega más imágenes según sea necesario
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
