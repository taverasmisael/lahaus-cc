// Use this file ONLY on test envs

import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { RealEstateAttributes } from '@/shared/real-state.interface'
import { ResponseBookmarks } from '@/shared/response.bookmarks'

export const DEFAULT_RESPONSE: ResponseBookmarks = {
  data: [{ attributes: { name: 'TEST', real_estate_ids: [3] }, id: '1' }],
  included: [{ id: '3', attributes: { name: 'TEST' } as RealEstateAttributes }],
}

export const server = setupServer(
  rest.get(process.env.NEXT_PUBLIC_API_URL as string, (req, res, ctx) => {
    return res(ctx.json(DEFAULT_RESPONSE))
  })
)

export const initializeMockServer = () => {
  // Enable API mocking before tests.
  beforeAll(() => server.listen())

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers())

  // Disable API mocking after the tests are done.
  afterAll(() => server.close())
}
