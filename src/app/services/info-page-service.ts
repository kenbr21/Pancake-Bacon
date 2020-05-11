import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {
  info: InfoPage={};
  cargada= false;

  equipo: any[]= [];

  constructor( private http: HttpClient) {
   // console.log('servico de infoPage');
   this.cargarInfo();
   this.cargarEquipo();

   }
   private cargarInfo(){
//leer el archivo JSON
this.http.get('assets/data/data-page.json')
.subscribe((resp: InfoPage)=>{
  this.cargada= true;
  this.info= resp;
});
 }

 private cargarEquipo(){
//leer el archivo JSON
this.http.get('https://angular-template-c2ebe.firebaseio.com/equipo.json')
.subscribe((resp :any[])=>{
  this.cargada= true;
  this.equipo = resp;
  //console.log(resp);
});
 }  

}
