import { type ReactElement } from 'react'
import WidePageLayout from '@Layout/Page/WidePageLayout'
import { FeatureSection, HeroSection } from '@Containers/Home'
import styles from './HomePage.module.scss'

const HomePage = (): ReactElement => {
  return (
    <WidePageLayout>
      <div className={styles.container}>
        <HeroSection />
        <FeatureSection />
      </div>
    </WidePageLayout>
  )
}

export default HomePage
