import { Component, OnInit } from '@angular/core';
import { Anuncio } from '../anuncio';
import { AnuncioService } from '../anuncio.service';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit{

  anuncios: Anuncio[] = [];
  anuncio: Anuncio = {} as Anuncio;


  constructor (private AnuncioService: AnuncioService){}

  ngOnInit(): void {
     this.loadAnuncio();
  }

  loadAnuncio() {
      this.AnuncioService.getAnuncio().subscribe(
        {
          next : data => this.anuncios = data,
        }
      );
  }

}
