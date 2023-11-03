import { type ReactElement, PropsWithChildren } from 'react'
import styles from './Main.module.scss'

const Main = ({ children }: PropsWithChildren): ReactElement => {
  return <main className={styles.main}>{children}</main>
}

export default Main
