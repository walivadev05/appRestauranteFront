import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Mesa } from '../_model/mesa';


@Injectable({
  providedIn: 'root'
})
export class MesaService {

  url: string ='http://localhost:8080/api/v1/mesas';
  
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Mesa[]>(this.url);
  }

}
