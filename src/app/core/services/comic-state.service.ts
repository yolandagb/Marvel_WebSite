import { Injectable } from '@angular/core';
import { Pagination } from '@core/interfaces/pagination.interface';
import { StateService } from '@core/interfaces/state-service.interface';
import { Comic } from '@core/models/comic.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComicStateService implements StateService<Comic> {
  private loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private elements$: BehaviorSubject<Comic[] | null> = new BehaviorSubject<
    Comic[] | null
  >(null);
  private selectedElement$: BehaviorSubject<Comic | null> =
    new BehaviorSubject<Comic | null>(null);
  private pagination$: BehaviorSubject<Pagination> =
    new BehaviorSubject<Pagination>({ page: 1, totalPages: 1, limit: 20 });

  constructor() {}

  isLoading$(): Observable<boolean> {
    return this.loading$.asObservable();
  }
  setLoading(isLoading: boolean): void {
    this.loading$.next(isLoading);
  }
  get$(): Observable<Comic[] | null> {
    return this.elements$.asObservable();
  }
  set(elements: Comic[]): void {
    this.elements$.next(elements);
  }
  getSelected$(): Observable<Comic | null> {
    return this.selectedElement$.asObservable();
  }
  setSelected(data: Comic): void {
    this.selectedElement$.next(data);
  }
  getPagination$(): Observable<Pagination> {
    return this.pagination$.asObservable();
  }
  setPagination(data: Pagination): void {
    this.pagination$.next(data);
  }
}
