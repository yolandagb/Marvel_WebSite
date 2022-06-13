import { Observable } from "rxjs";
import { ApiResponse } from "./api-response";

export interface ApiService<T> {
  list?(params: { [term: string]: any }): Observable<ApiResponse<T>>;
  add?(data: T): Observable<T>;
}
