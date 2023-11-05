import { type ReactElement } from 'react'
import Header from '@Layout/Header/Header'
import Main from '@Layout/Main/Main'
import Footer from '@Layout/Footer/Footer'
import WidePageLayout from '@Layout/Page/WidePageLayout'
import styles from './ErrorContainer.module.scss'

export const NotFoundPage = (): ReactElement => {
  return (
    <>
      <Header />
      <Main>
        <WidePageLayout>
          <div className={styles.imageContainer}>
            <img
              src="./common/not_found.png"
              alt="Not Found."
              className={styles.image}
            />
          </div>
        </WidePageLayout>
      </Main>
      <Footer />
    </>
  )
}
