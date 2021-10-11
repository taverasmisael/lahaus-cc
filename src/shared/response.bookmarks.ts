import { ApiBookmark } from './api-bookmark.interface'
import { ApiResponse } from './api-response.interface'
import { RealEstate } from './real-state.interface'

export interface ResponseBookmarks extends ApiResponse<ApiBookmark[]> {
  included: RealEstate[]
}
