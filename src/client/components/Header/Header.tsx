import classNames from 'classnames'

import NotificationBadge from '@/components/NotificationBadge'

import MenuIcon from '../../assets/menu-icon.svg'
import LogoSmall from '../../assets/logo-small.svg'
import LogoFull from '../../assets/logo-full.svg'
import styles from './Header.module.css'

// this has notification should probably come from a context/redux/etc...
function Header({ hasNotifications }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.center}>
        <div className={styles.content}>
          <div className="flex items-center">
            <div className={styles.menuIconContainer}>
              <MenuIcon title="Menu" className={styles.menuIcon} />
              {hasNotifications ? <NotificationBadge /> : null}
            </div>
            <LogoFull
              title="La Haus logo"
              className={classNames(styles.logo, 'hidden md:inline-block')}
            />
            <LogoSmall
              title="La Haus logo"
              className={classNames(styles.logo, 'md:hidden')}
            />
          </div>
          <div className="flex items-center"></div>
        </div>
      </div>
    </header>
  )
}

interface HeaderProps {
  hasNotifications?: boolean
}

export default Header
