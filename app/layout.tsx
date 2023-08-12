"use client"
/* Components */
import { Providers } from '@/lib/providers'
import { Nav } from './components/Nav'
/* Instruments */
import styles from './styles/layout.module.css'
import './styles/globals.css'
import { useEffect } from "react"
import { db, initialData } from "@/database"
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, reduxStore } from '@/lib/redux'

export default function RootLayout(props: React.PropsWithChildren) {
  useEffect(() => {
    db.open().then(() => {
      db.table('users').count((count) => {
        if (count === 0) {
          db.table('users').bulkAdd(initialData);
        }
      });
    });
  }, [])
  return (
    <Providers>
      {/* <PersistGate loading={null} persistor={ persistor }> */}
        <html lang="en">
          <body>
            <section className={styles.container}>
              <Nav />
              <main className={styles.main}>{props.children}</main>
            </section>
          </body>
        </html>
      {/* </PersistGate> */}
    </Providers>
  )
}
