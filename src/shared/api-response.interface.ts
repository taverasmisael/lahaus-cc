export interface ApiResponse<T, U = any> {
  data: T
  included?: U
}
