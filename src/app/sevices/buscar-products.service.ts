import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuscarProductsService {

  public urlBase = `${environment.urlBase}products/`;

  constructor(private http: HttpClient) { }

  getProduct(valor?: string) {
    const url = valor ? `${this.urlBase}${valor}` : `${this.urlBase}`
    return this.http.get(`${url}`);
  }
}
