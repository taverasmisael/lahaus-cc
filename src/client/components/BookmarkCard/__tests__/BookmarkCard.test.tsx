import { RealEstate, RealEstateAttributes } from '@/shared/real-state.interface'
import { render } from '@testing-library/react'

import BookmarkCard from '../BookmarkCard'

const DEFAULT_ITEMS = [
  {
    id: '1',
    attributes: {
      gallery_urls: ['https://unsplash.it/1'],
    },
  },
  {
    id: '2',
    attributes: {
      gallery_urls: ['https://unsplash.it/2'],
    },
  },
] as RealEstate[]

describe('components/BookmarkCard', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BookmarkCard id="3" items={[]} name="My empty bookmark" />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('renders correctly one item', () => {
    const { container } = render(
      <BookmarkCard id="3" items={[DEFAULT_ITEMS[0]]} name="My bookmarks" />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('renders correctly multi items', () => {
    const { container } = render(
      <BookmarkCard id="3" items={DEFAULT_ITEMS} name="My bookmarks" />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
