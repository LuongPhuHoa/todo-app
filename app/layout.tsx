"use client"
/* Components */
import { Providers } from '@/lib/providers'
/* Instruments */
import styles from './styles/layout.module.css'
import './styles/globals.css'
// import { Html, Head, Main, NextScript } from 'next/document'


export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <main className={styles.main}>{props.children}</main>
          </section>
        </body>
      </html>
    </Providers>
  )
}
