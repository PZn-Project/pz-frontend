import { type ReactElement, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { VscMenu, VscChromeClose } from 'react-icons/vsc'
import styles from './Header.module.scss'
import { NAVIGATION_DATA } from './data'

import logo from '@Assets/svg/logo-black.svg'

const Header = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to={'/'}>
          <img className={styles.logo} src={logo} alt="FunFits logo." />
        </Link>
        <nav>
          <ul className={styles.navList}>
            {NAVIGATION_DATA.map(({ label, path }) => (
              <li key={label}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    clsx(styles.navLink, {
                      [styles.activeLink]: isActive,
                    })
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            className={styles.navButton}
            onClick={() => setIsMenuOpen((state) => !state)}
            arial-label="Menu button."
          >
            {isMenuOpen ? (
              <VscChromeClose arial-label="Close menu." />
            ) : (
              <VscMenu arial-label="Open menu." />
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
