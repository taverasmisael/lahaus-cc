import { useState } from 'react'
import classNames from 'classnames'

import Nav from '@/components/Nav'
import NotificationBadge from '@/components/NotificationBadge'

import MenuIcon from '../../assets/menu-icon.svg'
import LogoSmall from '../../assets/logo-small.svg'
import LogoFull from '../../assets/logo-full.svg'
import styles from './Header.module.css'

const MenuItems = [
  {
    name: 'Cundinamarca',
    url: '#',
  },
  {
    name: 'Antioquia',
    url: '#',
  },
  {
    name: 'Recursos',
    url: '#',
  },
]

// this `hasNotification` should probably come from a context/redux/etc...
function Header({ hasNotifications }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className={styles.header}>
      <div className={styles.center}>
        <div className={styles.content}>
          <div className="flex items-center">
            <button
              aria-label="Abrir menú"
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className={styles.menuIconContainer}
            >
              <MenuIcon className={styles.menuIcon} />
              {hasNotifications ? (
                <NotificationBadge className={styles.notificationBadge} />
              ) : null}
            </button>
            <LogoFull
              title="La Haus logo"
              className={classNames(styles.logo, 'hidden md:inline-block')}
            />
            <LogoSmall
              title="La Haus logo"
              className={classNames(styles.logo, 'md:hidden')}
            />
          </div>
          <Nav
            items={MenuItems}
            hasNotifications={hasNotifications}
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  )
}

interface HeaderProps {
  hasNotifications?: boolean
}

export default Header
