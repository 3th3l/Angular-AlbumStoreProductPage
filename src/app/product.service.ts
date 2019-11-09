import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ProductService {
  _albumUrl = "../assets/album.json";

  constructor(private _http: Http) { 
  }

  getAlbum(id:number){
    this._albumUrl = "../assets/album.json";

    return this._http.get(this._albumUrl).map(resp => resp.json() === id)
  }

}
