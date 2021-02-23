import Head from 'next/head'
import AppCard from '../components/AppCard'
import styles from '../styles/Home.module.css'
import breeds from '../mocks/breeds.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DogHub - Find your dog!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        breeds.map(e => <AppCard breed={e}/>)
      }
    </div>
  )
}
