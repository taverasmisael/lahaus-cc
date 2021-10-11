import PlusIcon from '../../assets/plus-icon.svg'
import styles from './AddBookmarkButton.module.css'

function AddBookmarkButton() {
  return (
    <button
      type="button"
      className={styles.container}
      onClick={() => alert(`I'm not implementing this either 😬`)}
    >
      <span className={styles.header}>
        <PlusIcon className={styles.icon} />
      </span>
      <span className={styles.copy}>Crear una nueva lista</span>
    </button>
  )
}

export default AddBookmarkButton
