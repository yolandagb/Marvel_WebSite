import { Observable } from 'rxjs';
import { Pagination } from './pagination.interface';

export interface StateService<T> {
  isLoading$(): Observable<boolean>;
  setLoading(isLoading: boolean): void;
  get$(): Observable<T[] | null>;
  set(elements: T[]): void;
  getSelected$(): Observable<T | null>;
  setSelected(data: T): void;
  getPagination$?(): Observable<Pagination>;
  setPagination?(data: Pagination): void;
}
