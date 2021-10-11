import { render, waitForElementToBeRemoved } from '@testing-library/react'
import { initializeMockServer } from '@/client/helpers/mock-server'

import BookmarksContainer from '../BookmarksContainer'

initializeMockServer()

describe('containers/BookmarksContainer', () => {
  it('renders without crashing', () => {
    const { container } = render(<BookmarksContainer />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('renders the list of BookmarkCards', async () => {
    const { getByText, getByTestId, getAllByTestId, container } = render(
      <BookmarksContainer />
    )

    await waitForElementToBeRemoved(() => getByText(/loading/gi))
    expect(getByTestId('list')).toBeInTheDocument()
    expect(getAllByTestId('card')).toHaveLength(2)

    expect(container.firstChild).toMatchSnapshot()
  })
})
