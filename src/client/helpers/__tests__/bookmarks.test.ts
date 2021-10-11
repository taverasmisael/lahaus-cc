import { RealEstateAttributes } from '@/shared/real-state.interface'
import { ResponseBookmarks } from '@/shared/response-bookmarks.interface'
import { normalizeResponse } from '../bookmarks'

describe('helpers/bookmarks', () => {
  describe('normalizeResponse', () => {
    test('can normalize an API response', () => {
      const response: ResponseBookmarks = {
        data: [{ attributes: { name: 'TEST', real_estate_ids: [3] }, id: '1' }],
        included: [
          { id: '3', attributes: { name: 'TEST' } as RealEstateAttributes },
        ],
      }

      expect(normalizeResponse(response)).toMatchSnapshot()
    })

    test('can normalize an API response even with no real estate matches', () => {
      const response: ResponseBookmarks = {
        data: [{ attributes: { name: 'TEST', real_estate_ids: [] }, id: '1' }],
        included: [
          { id: '3', attributes: { name: 'TEST' } as RealEstateAttributes },
        ],
      }
      expect(normalizeResponse(response)).toMatchSnapshot()
    })
    test('ignore not found real estates ids', () => {
      const response: ResponseBookmarks = {
        data: [{ attributes: { name: 'TEST', real_estate_ids: [2] }, id: '1' }],
        included: [
          { id: '3', attributes: { name: 'TEST' } as RealEstateAttributes },
        ],
      }
      expect(normalizeResponse(response)).toMatchSnapshot()
    })
  })
})
