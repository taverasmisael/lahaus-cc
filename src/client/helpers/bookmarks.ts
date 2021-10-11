import { Bookmark } from '@/shared/bookmark.interface'
import { RealEstate } from '@/shared/real-state.interface'
import { ResponseBookmarks } from '@/shared/response.bookmarks'

export const normalizeResponse = (res: ResponseBookmarks): Bookmark[] => {
  const { data, included } = res

  const bookmarks = data.map((bm) => {
    const realEstates = bm.attributes.real_estate_ids.map((id) => {
      // I'm 100% sure that the RealEstates exist in the included array
      return (
        included.find((state) => state.id === id.toString()) ||
        ({} as RealEstate)
      )
    })

    return {
      id: bm.id,
      name: bm.attributes.name,
      realEstates,
    }
  })

  return bookmarks
}
