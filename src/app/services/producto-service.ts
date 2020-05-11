import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import{Producto} from '../interfaces/productos-service';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {
 cargando = true;
 producto: Producto[]= [];
 productosFiltrado : Producto[]=[];

  constructor( private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise((resolve, rejects)=>{
      this.http.get('https://angular-template-c2ebe.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[])=>{
        this.producto = resp;
       // console.log(resp);
        this.cargando=false;
        resolve();
      });
    });   
  }

  getProducto (id: string){
   return this.http.get(`https://angular-template-c2ebe.firebaseio.com/producto/${ id }.json`);
  }

  buscarProducto(termino:string){
    if(this.producto.length ==0){
      //cargar productos
       this.cargarProductos().then(()=>{
         //ejecutar despues de tener los productos
         //aplicar filtro
         this.filtrarProductos(termino);
       });
    }else{
      //aplicar filtro
      this.filtrarProductos(termino);
    }

  }
  private filtrarProductos(termino: string){
    console.log(this.producto);
    this.productosFiltrado=[];

    termino = termino.toLocaleLowerCase();

    this.producto.forEach(prod=>{
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf(termino)>=0 || tituloLower.indexOf(termino)>=0){
        this.productosFiltrado.push(prod);
      }
    });
  }
}
