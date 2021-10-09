import type { NextPage } from 'next'
import AppShell from '@/layouts/AppShell'
import BookmarksContainer from '@/containers/BookmarksContainer'

const Home: NextPage = () => {
  return (
    <AppShell>
      <div className="container px-4 mx-auto">
        <h1 className="text-center mb-14">Lista de Favoritos</h1>
        <BookmarksContainer />
      </div>
    </AppShell>
  )
}

export default Home
