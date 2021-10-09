import { render } from '@testing-library/react'

import AppShell from '../AppShell'

describe('layouts/AppShell', () => {
  test('it renders without any extra props', () => {
    const { container } = render(<AppShell />)
    expect(container).toMatchSnapshot()
  })
  test('it renders with children', () => {
    const { container } = render(
      <AppShell>
        <p>Hello World</p>
      </AppShell>
    )
    expect(container).toMatchSnapshot()
  })
})
