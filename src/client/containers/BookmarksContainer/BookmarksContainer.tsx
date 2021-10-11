import BookmarkCard from '@/components/BookmarkCard'
import AddBookmarkButton from '@/components/AddBookmarkButton'
import { useBookmarks } from '@/client/hooks/useBookmarks'
import { Bookmark } from '@/shared/bookmark.interface'

import styles from './BookmarksContainer.module.css'

function BookmarksContainer() {
  const state = useBookmarks(true)

  if (state.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div data-testid="list" className={styles.container}>
      <div data-testid="card" className={styles.item}>
        <BookmarkCard items={[]} id="" name="Empty list" />
      </div>
      {(state.bookmarks as Bookmark[]).map((bookmark) => (
        <div data-testid="card" className={styles.item} key={bookmark.id}>
          <BookmarkCard
            items={bookmark.realEstates}
            id={bookmark.id}
            name={bookmark.name}
          />
        </div>
      ))}
      <AddBookmarkButton />
    </div>
  )
}

export default BookmarksContainer
