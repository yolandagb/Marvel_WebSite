import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@core/interfaces/api-service.interface';
import { Comic } from '@core/models/comic.model';
import { environment } from '@env/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionApiService implements ApiService<Comic>{
  readonly url: string = `${environment.sparrest}/collection/comics`;

  constructor(private http: HttpClient) { }
  add(comic: Comic): Observable<Comic>{
    return this.http.post(this.url, comic.serialize()).pipe(map (resp => new Comic(resp)));
  }
}
