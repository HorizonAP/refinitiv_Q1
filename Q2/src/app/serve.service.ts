import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServeService {

  url="https://api.publicapis.org/categories";
  constructor(private http:HttpClient) { }

  getData():Observable <IData> {
    return this.http.get<IData>(this.url);
  }
}
export interface IData {
  count:number,
  categories:string[],

}
