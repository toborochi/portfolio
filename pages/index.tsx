import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Manrope } from '@next/font/google'
import Image from 'next/image'

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
        <title>{"Toborochi's Portfolio"}</title>
        <meta name="description" content="Just Another Portfolio" />
        <link rel="icon" href={`${process.env.FAVICON}/favicon.ico`} />
      </Head>
      <header className={styles.header_portfolio}>
        
        <section className={styles.language_box}>
          <button>about</button>
          <button>projects</button>
          <button>contact</button>
        </section>
        
        <section className={styles.language_box}>
          <div className={styles["circular--portrait"]}> <Image alt=""  src={`${process.env.FAVICON}/us.svg`}/> </div>
          <div className={styles["circular--portrait"]}> <Image alt=""  src={`${process.env.FAVICON}/bo.svg`} /> </div>
        </section>
      </header>

      <footer className={styles.footer_portfolio }>
      <a href="https://github.com/toborochi" target="_blank" rel="noreferrer" > <Image alt="" className={styles.footer_icon}  src={`${process.env.FAVICON}/github.svg`}/> </a>
      <a href="https://www.linkedin.com/in/leonardoav/" target="_blank" rel="noreferrer"> <Image alt="" className={styles.footer_icon} src={`${process.env.FAVICON}/icons8-linkedin-50.svg`}/> </a>
      </footer>

      <div className={styles.container_name}>
        
        <div className={`${styles.me}`}>
          <div className={`${styles.me_text} ${manropeRegular.className}` }  >Hi, my name is</div>
          <div className={`${styles.me_main} ${manrope.className}`  }>Leonardo</div>
          <div className={`${styles.me_aka} ${manropeRegular.className}`}  >(<b>toborochi</b>)</div>
        </div>
      </div>
    </div>
  )
}
