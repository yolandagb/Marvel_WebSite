import { Injectable } from '@angular/core';
import { Pagination } from '@core/interfaces/pagination.interface';
import { Comic } from '@core/models/comic.model';
import { CollectionApiService } from '@core/services/collection-api.service';
import { ComicApiService } from '@core/services/comic-api.service';
import { ComicStateService } from '@core/services/comic-state.service';
import { finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(
    private comicApi: ComicApiService,
    private comicState: ComicStateService,
    private collectionApi: CollectionApiService
  ) {}

  get comics$(): Observable<Comic[] | null> {
    return this.comicState.get$();
  }

  get pagination$(): Observable<Pagination> {
    return this.comicState.getPagination$();
  }

  get loading$(): Observable<boolean> {
    return this.comicState.isLoading$();
  }

  setSelected$(comic: Comic) {
    this.comicState.setSelected(comic);
  }

  getSelected$(): Observable<Comic | null> {
    return this.comicState.getSelected$();
  }


  searchComic(filters?: { [term: string]: any }) {
    this.comicState.setLoading(true);
    this.comicApi.list(filters)
    .pipe(
      finalize(()=> this.comicState.setLoading(false))
    )
    .subscribe((resp) => {
      this.comicState.set(resp.results);
      this.comicState.setPagination({
        page: resp.offset / resp.limit + 1,
        totalPages: Math.ceil(resp.total / resp.limit),
        limit: resp.limit,
      });
      //this.comicState.setLoading(false);
    },
    //error => this.comicState.setLoading(false)
    );
  }

  addToCollection(comic:Comic){
    comic.id = undefined;
    this.collectionApi.add(comic).subscribe(resp => console.log(resp));
  }
}
