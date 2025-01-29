import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  mostrarPortada: boolean = true;
  private videoReproducido = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  registrarInteraccion(event: MouseEvent): void {
    if (!this.videoReproducido && this.videoPlayer?.nativeElement) {
      this.videoPlayer.nativeElement.play().then(() => {
        this.videoReproducido = true;
        this.mostrarPortada = false;
        console.log('✅ Video iniciado después del clic.');
      }).catch(error => {
        console.error('Error al intentar reproducir el video:', error);
      });
    }
  }
}
