import Image from 'next/image'
import Link from 'next/link'

import styles from './BookmarkCard.module.css'
import { RealEstate } from '@/shared/real-state.interface'
import BookmarkRealEstateCarousel from '@/components/BookmarkRealEstateCarousel'

function BookmarkCard({ items, name, id }: BookmarkCardProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BookmarkRealEstateCarousel items={items} />
      </header>
      <h2 className={styles.title}>
        <Link href={`bookmarks/${id}`}>
          <a>{name}</a>
        </Link>
      </h2>
      <p className={styles.description}>{getDescriptionText(items)}</p>
    </div>
  )
}

interface BookmarkCardProps {
  items: RealEstate[]
  name: string
  id: string
}

function getDescriptionText(items: any[]) {
  return items.length === 1
    ? '1 propiedad guardada'
    : `${items.length} propiedades guardadas`
}

export default BookmarkCard
