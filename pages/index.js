import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

var express = require('express')

export default function Home() {

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: ''
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Protected SPA</title>
        <meta name="description" content="SPA protected by Keycloak oauth2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome {user.firstname === '' ? 'Unknown' : user.firstname}
        </h1>

        <p className={styles.description}>
          Firstname: {' '}
          <code className={styles.code}>{user.firstname === '' ? 'Unknown' : user.firstname}</code>
        </p>

        <p className={styles.description}>
          Lastname: {' '}
          <code className={styles.code}>{user.lastname === '' ? 'Unknown' : user.lastname}</code>
        </p>

        <p className={styles.description}>
          E-Mail: {' '}
          <code className={styles.code}>{user.email === '' ? 'Unknown' : user.email}</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Login &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/LinusWeigand"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Linus Weigand
        </a>
      </footer>
    </div>
  )
}
