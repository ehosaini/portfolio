import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import TestComponent from '../components/test-component';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TestComponent />
      </main>

      <footer>

      </footer>
    </div>
  )
}
