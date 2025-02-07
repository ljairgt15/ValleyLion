import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images = [
    { url: 'assets/gallery/0a2f068d-c447-4739-9cb5-d1dc4bd85a2b.jpg', alt: 'Descripción 1' },
    { url: 'assets/gallery/1d30450b-3f9b-490b-915f-34053021214a.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/8B7D9A13-507F-470D-A077-EC53266349E1.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/8cac283a-b6c2-45b2-9f0d-f959d491eacc.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/21a1c09d-93a1-4cf1-b06c-af54d94e1b22.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/32d31567-89e4-43b4-bc7c-c8731da6d711.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/59d0fae7-44be-4021-bcdf-90fd2d50ff0a.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/93DFA11C-D8D1-42B8-8297-608A8D58A694.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/20240707_110348.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/20240707_110350.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/20240707_110352.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/20240707_110352(0).jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/20240707_110353.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/20240707_110354.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/280471377_742636926820816_1204326174013751462_n.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/BB880350-C535-4684-A208-400A06FC131D.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/c8bb4a25-b12e-48cb-9894-3856538c12ad.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/e60f6df6-da84-4a2f-8aa0-fb141210a2c3.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/e9504c3b-fdb4-48d1-9151-7355453a182a.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/FB_IMG_1625758191255.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/FB_IMG_1625758325925.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/FB_IMG_1627823019927.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/FB_IMG_1627823023244.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/FB_IMG_1630695303934.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/FB_IMG_1630695391677.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/FB_IMG_1630695394198.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/FB_IMG_1630695398347.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/FB_IMG_1630695403283.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/FB_IMG_1630695406050.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/FB_IMG_1630695412457.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210318_150554.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210318_150604~2.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210318_150853~2.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210318_150854.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210319_140504.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210319_140517.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210319_140534.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210319_140536.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210319_140621.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210319_141607.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210319_142005~2.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210406_143135~2.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210406_143137~2.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210406_153615~2.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210406_153617~2.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210413_154102~2.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210604_145530.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210611_154509.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210611_154511.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210611_154513.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210611_154520.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210611_154524.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210728_143443.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210729_143929.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210729_144637.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210729_144641.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210729_145216.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210729_145239.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210729_145313.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210729_145400.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210729_151323.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210729_152412.jpg', alt: 'Descripción 2' },
    { url: 'assets/gallery/IMG_20210729_152452.jpg', alt: 'Descripción 2' },
  ];

  constructor() { }

  ngOnInit(): void {
    //this.loadImages();
  }
  /*
  loadImages() {
    // Usamos require.context solo si estás utilizando Webpack (CLI de Angular)
    const context = (require as any).context('../../assets/gallery/', false, /\.(png|jpe?g|svg)$/);
    this.images = context.keys().map((fileName: string) => ({
      url: `assets/gallery/${fileName.replace('./', '')}`,
      alt: `Imagen ${fileName}`
    }));
  }
    */
}
