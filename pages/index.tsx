import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Manrope } from '@next/font/google'

const manrope = Manrope({
  weight: '800'
})

const manropeRegular = Manrope({
  weight: '400'
})

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Toborochi's Portfolio</title>
        <meta name="description" content="Just Another Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header_portfolio}>
        
        <section className={styles.language_box}>
          <button>about</button>
          <button>projects</button>
          <button>contact</button>
        </section>
        
        <section className={styles.language_box}>
          <div className={styles["circular--portrait"]}> <img src="/us.svg"/> </div>
          <div className={styles["circular--portrait"]}> <img src="/bo.svg"/> </div>
        </section>
      </header>

      <footer className={styles.footer_portfolio }>
      <div > <img className={styles.footer_icon}  src="/github.svg"/> </div>
      <div > <img className={styles.footer_icon} src="/icons8-linkedin-50.svg"/> </div>
      </footer>

      <div className={styles.container_name}>
        
        <div className={`${styles.me}`}>
          <div className={`${styles.me_text} ${manropeRegular.className}` }  >Hi, my name is</div>
          <div className={`${styles.me_main} ${manrope.className}`  }>Leonardo</div>
          <div className={`${styles.me_aka} ${manropeRegular.className}`}  >(a.k.a. <b>toborochi</b>  )</div>
        </div>
      </div>
    </div>
  )
}
