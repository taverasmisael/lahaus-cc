import { render } from '@testing-library/react'

import NotificationBadge from '../NotificationBadge'

describe('components/NotificationBadge', () => {
  test('it renders correctly', () => {
    const { container } = render(<NotificationBadge />)
    expect(container.firstChild).toMatchSnapshot()
  })
  test('it applies className correctly', () => {
    const { container } = render(<NotificationBadge className="bg-red-300" />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
