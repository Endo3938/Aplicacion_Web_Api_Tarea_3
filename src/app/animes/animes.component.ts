import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FindAnimeService } from '../find-anime.service';
import { Models } from './animes.model';

@Component({

  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']

})

export class AnimesComponent implements OnInit {

  cargando = false;
  ultimoTexto = "";
  animes : Models.Animes | undefined;
  maxPage = 0;

  private animesSub : Subscription | undefined

  @Input() nombre = "";

  @Input() filtro = "";

  page = 1;

  constructor(private serv : FindAnimeService) { }

  ngOnInit(): void {

    this.cargando = true;

  }

  buscar() {

    this.ultimoTexto = this.nombre;
    this.cargando = true;
    this.page = 1;

    this.animesSub = this.serv.fetchAnimes(encodeURI(this.nombre), this.filtro, this.page).subscribe(anime =>{

      this.animes = anime;
      this.cargando = false;
      this.maxPage = anime.last_page;

    });

  }

  ngOnDestroy() {

    if (this.animesSub) {

      this.animesSub.unsubscribe();

    }

  }

  avanzar() {

    this.page++;
    this.cargando = true;

    this.animesSub = this.serv.fetchAnimes(encodeURI(this.ultimoTexto), this.filtro, this.page).subscribe(anime =>{

      this.animes = anime; this.cargando = false;

    });

  }

  retroceder() {

    this.page--;
    this.cargando = true;


    this.animesSub = this.serv.fetchAnimes(encodeURI(this.ultimoTexto), this.filtro, this.page).subscribe(anime =>{

      this.animes = anime; this.cargando = false;

    });

  }

}
