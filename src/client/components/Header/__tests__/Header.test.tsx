import { render } from '@testing-library/react'
import Header from '../Header'

describe('components/Header', () => {
  test('it renders correctly', () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })
  test('it renders correctly with notifications', () => {
    const { container } = render(<Header hasNotifications />)
    expect(container).toMatchSnapshot()
  })
})
