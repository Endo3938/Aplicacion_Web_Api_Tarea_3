import { Injectable } from '@angular/core';
import { Models } from "./animes/animes.model"
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FindAnimeService {

  private _animes = new BehaviorSubject<Models.Animes>(new Models.Animes("", false, 0, [], 0));

  private apiAnimes: Models.Animes | undefined

  constructor(private http: HttpClient) { }


  getAnimes(){

    return this._animes.asObservable();

  }

  fetchAnimes(nombre : string, filtro : string, page : number) {

    console.log(`${environment.apiURLAnime}q=${nombre}&page=${page}&rated=${filtro}`);

    return this.http.get<Models.Animes>(`${environment.apiURLAnime}q=${nombre}&page=${page}&rated=${filtro}`);

  }
  
}
