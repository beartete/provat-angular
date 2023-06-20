import { Component, OnInit } from '@angular/core';
import { Anuncio } from '../anuncio';
import { AnuncioService } from '../anuncio.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit{
  
  anuncio : Anuncio[] = []
  formGroupAnuncio : FormGroup;


  constructor (private anuncioService: AnuncioService, private formBuilder: FormBuilder){
    this.formGroupAnuncio = this.formBuilder.group(
      {
        id: [],
        name: [],
        type : [],
        description : [],
        url : []
      }
    );
  }
  ngOnInit(): void {
    this.loadAnuncio();
  }

  loadAnuncio() {
    this.anuncioService.getAnuncio().subscribe(
      {
        next: data => this.anuncio = data,
        error: msg => console.log("Erro ao chamar o endpoint" + msg)
      }
    )
  }
  Cadastrar() {
    this.anuncioService.Cadastrar(this.formGroupAnuncio.value).subscribe(
      {
        next : data => {
          this.anuncio.push(data);
          this.formGroupAnuncio.reset();
        }
      }
    )
  }
}