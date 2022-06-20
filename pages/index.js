import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import LogTable from './logTable'

export default function Home() {
  const [defender, setDefender] = useState(1)
  const [attacker, setAttacker] = useState(1)

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const apiMatch = async () => {
    setLoading(true)
    await fetch(`api/match?defenderTotal=${defender}&attackerTotal=${attacker}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })

    console.log(data)
  }

  function handleClick() {
    apiMatch()
  }

  function handleDefChange(e) {
    setDefender(parseInt(e.target.value))
  }

  function handleAttChange(e) {
    setAttacker(parseInt(e.target.value))
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Risk battle simulator</title>
        <meta name="description" content="Risk board game battle simulator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Click to <span>Risk!</span>
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Defender</h2>
            <p>
              <label htmlFor={'defender'}>Defender troop amount</label>
              <input type={'number'} id={'defender'} name={'defender'} value={defender} onChange={handleDefChange} min={1} max={1000} />
            </p>
          </div>

          <div className={styles.card}>
            <h2>Attacker</h2>
            <p>
              <label htmlFor={'attacker'}>Attacker troop amount</label>
              <input type={'number'} id={'attacker'} name={'attacker'} value={attacker} onChange={handleAttChange} min={1} max={1000} />
            </p>
          </div>

          <button onClick={handleClick}>FIGHT!</button>

          <div className={styles.card} style={{ width: '100%', maxWidth: '100%' }}>
            <p>
              {isLoading 
              ? 'Loading...' 
              : data && <LogTable data={data}></LogTable>
              }
            </p>
          </div>

        </div>
      </main>
    </div>
  )
}
