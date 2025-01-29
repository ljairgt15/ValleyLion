import { Component, OnInit, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  private videoReproducido = false; // Evita múltiples intentos de reproducción

  constructor(private renderer: Renderer2) { }
  ngOnInit(): void {
    // Escuchar evento de scroll
    this.renderer.listen('window', 'scroll', () => this.reproducirVideo());
    this.renderer.listen('window', 'click', () => this.reproducirVideo());

  }
/*

   ngOnInit(): void {
  const boton = document.createElement('button');
  boton.style.position = 'absolute';
  boton.style.opacity = '0';
  boton.style.pointerEvents = 'none';
  document.body.appendChild(boton);

  boton.click(); // Simula una interacción del usuario

  setTimeout(() => {
    this.reproducirVideo();
    document.body.removeChild(boton); // Elimina el botón después de la interacción
  }, 500);
}
    */

 private reproducirVideo(): void {
    if (this.videoPlayer && this.videoPlayer.nativeElement && !this.videoReproducido) {
      this.videoPlayer.nativeElement.play().then(() => {
        this.videoReproducido = true; // Solo reproducir una vez
      }).catch(error => {
        console.error('Error al reproducir el video:', error);
      });
    }
  }

}
