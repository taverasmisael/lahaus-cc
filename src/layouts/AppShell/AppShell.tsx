import Header from '@/components/Header'
import type { NextPage } from 'next'
import Head from 'next/head'

const DEFAULT_DESCRIPTION =
  '¿Buscas una inmobiliaria? Tenemos una buena noticia, somos mucho más. La tecnología y oferta de finca raíz harán más fácil la compra de tu vivienda nueva."'

const AppShell: NextPage<AppShellProps> = ({
  children,
  description,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title || 'Inicio'} - La haus</title>
        <meta name="description" content={description || DEFAULT_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header hasNotifications />
      {children}
    </>
  )
}

interface AppShellProps {
  description?: string
  title?: string
}

export default AppShell
