import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import DataTable from '../components/DataTable'
import FightButton from '../components/FightButton'

export default function Home() {
  // Defender/Attacker unit amounts
  const [defender, setDefender] = useState(1)
  const [attacker, setAttacker] = useState(1)

  // Defender/Attacker unit per attack amounts
  const [defenderPAtt, setDefenderPAtt] = useState('x2')
  const [attackerPAtt, setAttackerPAtt] = useState('x3')

  // Match raw data
  const [data, setData] = useState(null)

  function handleChange(e) {
    switch (e.target.name) {
      case 'defenderUnitAmount':
        setDefender(parseInt(e.target.value))
        break

      case 'attackerUnitAmount':
        setAttacker(parseInt(e.target.value))
        break

      case 'defenderUnitPerAttack':
        if (['x1', 'x2'].includes(e.target.value))
          setDefenderPAtt(e.target.value)
        break

      case 'attackerUnitPerAttack':
        if (['x1', 'x2', 'x3'].includes(e.target.value))
          setAttackerPAtt(e.target.value)
        break

      default:
        console.log(e.target.name, "? What are you doing ?")
        break;
    }
  }

  return (
    <div className="container-fluid bg-dark">
      <Head>
        <title>Risk battle simulator</title>
        <meta name="description" content="Risk board game battle simulator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row pb-3">
        <h1 className={styles.title}>
          Click to <span>Risk!</span>
        </h1>
      </div>

      <div className="row justify-content-md-center">
        <div className="col col-lg-3">
          <div className="card text-white bg-primary">
            <h2 className="card-header">Defender</h2>
            <div className="card-body">
              <p className="card-text">
                <label htmlFor='defender'>Defender troop amount</label><br />
                <input className="w-75 d-inline" type='number' id='defender' name='defenderUnitAmount' value={defender} onChange={handleChange} min={1} max={1000} />
                <select className="form-control form-control-sm d-inline w-auto" name="defenderUnitPerAttack" onChange={handleChange}>
                  <option>x2</option>
                  <option>x1</option>
                </select>
              </p>
            </div>
          </div>
        </div>

        <div className="col col-lg-3">
          <div className="card text-white bg-danger">
            <h2 className="card-header">Attacker</h2>
            <div className="card-body">
              <p className='card-text'>
                <label htmlFor='attacker'>Attacker troop amount</label><br />
                <input className="w-75 d-inline" type='number' id='attacker' name='attackerUnitAmount' value={attacker} onChange={handleChange} min={1} max={1000} />
                <select className="form-control form-control-sm d-inline w-auto" name="attackerUnitPerAttack" onChange={handleChange}>
                  <option>x3</option>
                  <option>x2</option>
                  <option>x1</option>
                </select>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-md-center p-3">
        <div className="col col-md-auto">
          <FightButton
            defender={defender}
            attacker={attacker}
            defenderPAtt={defenderPAtt}
            attackerPAtt={attackerPAtt}
            setData={setData}
          />
        </div>
      </div>

      {
        data && (
          <div className="row justify-content-md-center">
            <div className="col-lg-auto">
                <DataTable data={data} />
            </div>
          </div>
        )
      }

    </div>
  )
}
