import { renderHook, act } from '@testing-library/react-hooks'

import { useBookmarks } from '../useBookmarks'
import { normalizeResponse } from '@/client/helpers/bookmarks'
import { sleep } from '@/client/helpers/utils'

import {
  initializeMockServer,
  DEFAULT_RESPONSE,
} from '@/client/helpers/mock-server'

initializeMockServer()

describe('useBookmarks', () => {
  test('can return raw data', async () => {
    const { result } = renderHook(() => useBookmarks())
    await act(() => sleep(60))

    expect(result.current.bookmarks).toEqual(DEFAULT_RESPONSE)
  })
  test('can return normalized data', async () => {
    const { result } = renderHook(() => useBookmarks(true))
    await act(() => sleep(60))
    expect(result.current.bookmarks).toEqual(
      normalizeResponse(DEFAULT_RESPONSE)
    )
  })
})
