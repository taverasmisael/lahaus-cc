// next/image was crashing the app on resize for some reason ¯\_(ツ)_/¯
/* eslint-disable @next/next/no-img-element */

import type { NextPage, GetServerSideProps } from 'next'
import Link from 'next/link'
import AppShell from '@/layouts/AppShell'
import { ResponseBookmarks } from '@/shared/response-bookmarks.interface'
import { normalizeResponse } from '@/client/helpers/bookmarks'
import { RealEstate } from '@/shared/real-state.interface'

const BookmarkPage: NextPage<BookmarkPageProps> = ({ realEstates, name }) => {
  return (
    <AppShell title={`Guardados en "${name}"`}>
      <div className="container px-4 mx-auto">
        <header className="mb-14">
          <h1 className="text-center mb-4">{name}</h1>
          <Link href="/bookmarks">
            <a className="text-center text-sm text-gray-400 block hover:text-copy">Volver a los marcadores</a>
          </Link>
        </header>
        {!realEstates.length && (
          <h2 className="text-center">Agrega algun favorito</h2>
        )}

        <div className="grid gap-4 md:grid-cols-3 2xl:grid-cols-4">
          {realEstates.map((re) => (
            <div key={re.id} className="rounded-md grid overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <img
                src={re.attributes.gallery_urls[0]}
                alt={re.attributes.name}
                className="w-full object-cover h-60 "
              />
              <div className="p-4 grid">
                <h3 className="text-xl mb-4">{re.attributes.name}</h3>
                <dl className="flex gap-2 text-sm">
                  <dt className="font-bold">Habitaciones</dt>
                  <dd>{re.attributes.bedroom[0]}</dd>
                  <dt className="font-bold ml-2">Baños</dt>
                  <dd>{re.attributes.bathroom[0]}</dd>
                </dl>

                <a
                  href="#"
                  className="inline-block w-full mt-8 p-4 text-center bg-secondary text-gray-100 hover:text-white rounded-sm font-semibold text-lg hover:shadow-md"
                >
                  Ver detalles
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const url = process.env.NEXT_PUBLIC_API_URL

    const id = ctx.params?.id
    if (!id) {
      throw new Error('id is required')
    }
    if (!url) {
      throw new Error('Missing API URL')
    }

    const res = await fetch(url)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`)
    }

    const data: ResponseBookmarks = await res.json()
    const result = normalizeResponse(data).find((item) => item.id === id)

    if (!result) {
      throw new Error(`Could not find ${id}`)
    }

    return {
      props: {
        name: result.name,
        realEstates: result.realEstates,
      },
    }
  } catch (e) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}

interface BookmarkPageProps {
  name: string
  realEstates: RealEstate[]
}

export default BookmarkPage
