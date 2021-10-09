import classNames from 'classnames'
import Link from 'next/link'
import NotificationBadge from '@/components/NotificationBadge'

import LogoFull from '../../assets/logo-full.svg'
import DropdownIcon from '../../assets/dropdown-icon.svg'
import styles from './Nav.module.css'

function Nav({ items, hasNotifications, isOpen, onClose }: NavProps) {
  return (
    <>
      <div
        className={classNames(styles.backdrop, {
          [styles.backdropOpen]: isOpen,
        })}
        onClick={onClose}
      />
      <button
        type="button"
        onClick={onClose}
        className={classNames(styles.close, { hidden: !isOpen })}
      >
        <span className="sr-only">Cerrar Menú</span>
        <span className={styles.closeIcon} aria-hidden="true">
          &times;
        </span>
      </button>
      <div
        className={classNames('transform', styles.nav, {
          [styles.navOpen]: isOpen,
        })}
      >
        <LogoFull className={styles.logo} title="La haus logo" />

        <nav className={styles.menu}>
          {items.map(({ name, url }) => (
            <Link href={url} key={name}>
              <a className={styles.menuItem}>{name}</a>
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className={classNames(styles.menuItem, styles.profileItem)}
          onClick={() => alert(`I'm not implementing this 😃`)}
        >
          Mi Perfil
          <DropdownIcon
            className={classNames('transform', styles.dropdownIcon)}
          />
          {hasNotifications ? (
            <NotificationBadge className={styles.notificationBadge} />
          ) : null}
        </button>
      </div>
    </>
  )
}

interface NavProps {
  items: MenuItem[]
  hasNotifications?: boolean
  isOpen?: boolean
  onClose: () => void
}

interface MenuItem {
  name: string
  url: string
}

export default Nav
