import { render, fireEvent, getByLabelText } from '@testing-library/react'
import Header from '../Header'

describe('components/Header', () => {
  test('it renders correctly', () => {
    const { container } = render(<Header />)
    expect(container.firstChild).toMatchSnapshot()
  })
  test('it renders correctly with notifications', () => {
    const { container } = render(<Header hasNotifications />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('toggle the mobile menu', () => {
    const { container, getByRole } = render(<Header hasNotifications />)
    const menuToggler = getByLabelText(container, /abrir menú/gi)
    fireEvent.click(menuToggler)

    // This is a workaround as classes (and DOM position) might change in the future and break this test
    const nav = getByRole('navigation').parentNode as HTMLElement
    const closeBtn = getByLabelText(
      nav.parentNode as HTMLElement,
      /cerrar menú/gi
    )

    expect(nav.classList.contains('navOpen')).toBe(true)

    fireEvent.click(closeBtn)
  })
})
