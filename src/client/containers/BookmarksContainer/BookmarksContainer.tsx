import BookmarkCard from '@/client/components/BookmarkCard'
import { useBookmarks } from '@/client/hooks/useBookmarks'
import { Bookmark } from '@/shared/bookmark.interface'
import styles from './BookmarksContainer.module.css'

function BookmarksContainer() {
  const state = useBookmarks(true)
  return state.isLoading ? (
    <div>Loading...</div>
  ) : (
    <ul className={styles.container}>
      {(state.bookmarks as Bookmark[]).map((bookmark) => (
        <li className={styles.item} key={bookmark.id}>
          <BookmarkCard
            items={bookmark.realEstates}
            id={bookmark.id}
            name={bookmark.name}
          />
        </li>
      ))}
    </ul>
  )
}

export default BookmarksContainer
