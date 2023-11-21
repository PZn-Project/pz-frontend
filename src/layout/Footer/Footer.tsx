import { type ReactElement } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import logo from '@Assets/svg/logo-white.svg'
import { MEDIA_LINKS, NAVIGATION_DATA } from './data'
import styles from './Footer.module.scss'

const Footer = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.navLogo}>
            <img src={logo} alt="FunFits logo." />
            <p>Explore, Compete, Win</p>
          </div>
          <nav>
            <ul className={styles.navList}>
              {NAVIGATION_DATA.map(({ label, path }) => (
                <li key={label}>
                  <Link to={path} className={styles.navLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <hr className={styles.hr} />
        <ul className={styles.media}>
          {MEDIA_LINKS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                target="_blank"
                rel="noreferrer"
                href={href}
                className={clsx(styles.mediaLink, 'link-hover')}
              >
                <Icon />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.rights}>
        Copyright © 2023 by FunFits Inc. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
