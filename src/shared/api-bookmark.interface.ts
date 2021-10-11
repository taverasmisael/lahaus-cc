export interface ApiBookmark {
  id: string
  attributes: {
    name: string

    real_estate_ids: number[]
  }
}
