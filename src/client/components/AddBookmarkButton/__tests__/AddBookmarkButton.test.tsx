import { render } from '@testing-library/react'

import AddBookmarkButton from '../AddBookmarkButton'

describe('components/AddBookmarkButton', () => {
  it('renders correctly', () => {
    const { container } = render(<AddBookmarkButton />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
