import { render } from '@testing-library/react'

import { RealEstate } from '@/shared/real-state.interface'
import BookmarkRealEstateCarousel from '../BookmarkRealEstateCarousel'

const realEstateFactory = (n = 1) =>
  Array(n)
    .fill(n)
    .map(
      (n) =>
        ({
          id: `${n + 2}`,
          attributes: {
            name: `Real name ${n}`,
            gallery_urls: Array(n)
              .fill(n)
              .map((n) => `https://unsplash.it/${n}`),
          },
        } as RealEstate)
    )

describe('components/BookmarkRealEstateCarousel', () => {
  test('renders empty without crashing', () => {
    const { container } = render(<BookmarkRealEstateCarousel items={[]} />)
    expect(container.firstChild).toMatchSnapshot()
  })
  test('renders single without crashing', () => {
    const { container } = render(
      <BookmarkRealEstateCarousel items={realEstateFactory()} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  test('renders double without crashing', () => {
    const { container } = render(
      <BookmarkRealEstateCarousel items={realEstateFactory(2)} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  test('renders triple without crashing', () => {
    const { container } = render(
      <BookmarkRealEstateCarousel items={realEstateFactory(3)} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders N without crashing', () => {
    const { container } = render(
      <BookmarkRealEstateCarousel items={realEstateFactory(18)} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('only displays overlay on 3+ items', () => {
    const { rerender, queryByTestId } = render(
      <BookmarkRealEstateCarousel items={realEstateFactory(3)} />
    )

    expect(queryByTestId('overlay')).toBe(null)

    rerender(<BookmarkRealEstateCarousel items={realEstateFactory(4)} />)

    expect(queryByTestId('overlay')).toHaveTextContent('+1')
  })
})
