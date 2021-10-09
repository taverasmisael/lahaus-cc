import { render, fireEvent } from '@testing-library/react'
import Nav from '../Nav'

describe('components/Nav', () => {
  test('it can render an empty list', () => {
    const { container } = render(<Nav items={[]} onClose={jest.fn()} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('it can render a notification badge', () => {
    const { container } = render(
      <Nav items={[]} hasNotifications onClose={jest.fn()} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('the profile button is present', () => {
    const { getByTestId } = render(<Nav items={[]} onClose={jest.fn()} />)
    getByTestId('profile-button')

    // TODO: test the profile button does something. ATM it only alerts
  })

  test('it can render a list of items', () => {
    const items = [
      { name: 'Item1', url: '#item1' },
      { name: 'Item2', url: '#item2' },
    ]

    const { container } = render(<Nav items={items} onClose={jest.fn()} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('it knows how to close', () => {
    const onClose = jest.fn()
    const { getByLabelText } = render(<Nav items={[]} onClose={onClose} />)
    fireEvent.click(getByLabelText(/cerrar menú/gi))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
