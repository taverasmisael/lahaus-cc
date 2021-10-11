import Image from 'next/image'
import Link from 'next/link'

import styles from './BookmarkCard.module.css'
import emptyStateImg from '../../assets/empty-state.png'
import { RealEstate } from '@/shared/real-state.interface'

function BookmarkCard({ items, name, id }: BookmarkCardProps) {
  console.log(items)
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {!items.length ? (
          <Image
            src={emptyStateImg}
            alt=""
            layout="responsive"
            className={styles.empty}
          />
        ) : (
          <div>Cute carousel</div>
        )}
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
