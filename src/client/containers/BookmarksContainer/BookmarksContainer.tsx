import BookmarkCard from '@/client/components/BookmarkCard'
import styles from './BookmarksContainer.module.css'

function BookmarksContainer() {
  return (
    <ul className={styles.container}>
      <li className={styles.item}>
        <BookmarkCard items={[]} id="3" name="Empty" />
      </li>
    </ul>
  )
}

export default BookmarksContainer
