import BookmarkCard from '@/client/components/BookmarkCard'
import { useBookmarks } from '@/client/hooks/useBookmarks'
import { Bookmark } from '@/shared/bookmark.interface'
import styles from './BookmarksContainer.module.css'

function BookmarksContainer() {
  const state = useBookmarks(true)
  state.isLoading //?

  if (state.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div data-testid="list" className={styles.container}>
      {(state.bookmarks as Bookmark[]).map((bookmark) => (
        <div data-testid="card" className={styles.item} key={bookmark.id}>
          <BookmarkCard
            items={bookmark.realEstates}
            id={bookmark.id}
            name={bookmark.name}
          />
        </div>
      ))}
    </div>
  )
}

export default BookmarksContainer
