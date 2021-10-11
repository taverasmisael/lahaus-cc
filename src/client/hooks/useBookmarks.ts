import { useSWR } from './useSWR'
import { ResponseBookmarks } from '@/shared/response.bookmarks'
import { Bookmark } from '@/shared/bookmark.interface'
import { normalizeResponse } from '@/client/helpers/bookmarks'

export function useBookmarks(normalize?: boolean) {
  const url = process.env.NEXT_PUBLIC_API_URL

  if (!url) {
    throw new Error('Missing API URL')
  }

  const { data, error } = useSWR<ResponseBookmarks>(url)

  return {
    bookmarks: normalize && data ? normalizeResponse(data) : data,
    isLoading: !error && !data,
    isError: error,
  }
}
