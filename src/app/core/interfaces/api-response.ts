export interface ApiResponse<T> {
  count: number;
  limit: number;
  offset: number;
  results: T[];
  total: number;
}
