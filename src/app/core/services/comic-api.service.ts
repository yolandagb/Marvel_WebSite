import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@core/interfaces/api-response';
import { ApiService } from '@core/interfaces/api-service.interface';
import { Comic } from '@core/models/comic.model';
import { environment } from '@env/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicApiService implements ApiService<Comic>{
  readonly url: string = `${environment.api_server}/v1/public/comics`;

  constructor(private http: HttpClient) { }

  list(filters?: { [term: string]: any }): Observable<ApiResponse<Comic>> {
    const params = new HttpParams().appendAll(filters ? filters : {});
    const url = `${environment.api_server}/v1/public/comics`;
    return this.http.get(url, { params }).pipe(
      map((resp: any) => ({
        ...resp.data,
        results: resp.data.results.map((comic: any) => new Comic(comic)),
      }))
    );
  }
}
