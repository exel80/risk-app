import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import LogTable from './logTable'

export default function Home() {
  const [defender, setDefender] = useState(1)
  const [attacker, setAttacker] = useState(1)

  const [data, setData] = useState(null)

  function match(defenderTotal, attackerTotal) {
    let defenderCurr = defenderTotal
    let attackerCurr = attackerTotal

    // Status: 0 = defender won || 1 = attacker won
    // Mathces: All fight logs
    let matchLog = { status: 0, matches: [] }
    let id = 0;

    let _log = (defrolls, attrolls) => {
      id++
      return {
        id: id - 1,
        defender: { total: parseInt(defenderTotal), current: parseInt(defenderCurr), rolls: [...defrolls] },
        attacker: { total: parseInt(attackerTotal), current: parseInt(attackerCurr), rolls: [...attrolls] },
      }
    }

    let diceRoll = (amount) => {
      let rolls = []

      for (let index = 0; index < amount; index++)
        rolls.push(Math.ceil(Math.random() * 6))

      return rolls.sort((a, b) => b - a)
    }

    while (attackerCurr > 0 && defenderCurr > 0) {
      // How many dice attacker/defender is allowed to use
      let def = defenderCurr >= 2 ? 2 : defenderCurr
      let att = attackerCurr >= 3 ? 3 : attackerCurr

      // Initialize fallen troops count from each side
      let fallenDef = 0
      let fallenAtt = 0

      // Roll the dice(s)
      let defRolls = diceRoll(def)
      console.log(`Defender rolled ${defRolls}`)

      let attRolls = diceRoll(att)
      console.log(`Attacker rolled ${attRolls}`)

      // Main log for the match
      matchLog.matches.push(_log(defRolls, attRolls))

      // If defender has same or higher number, attacker losses one troop.
      if (defRolls[0] >= attRolls[0]) {
        console.log(`[0] Defender won (D ${defRolls[0]} >= A ${attRolls[0]})`)
        attackerCurr--
        fallenAtt++
      }
      // If attacker rolled higher number then defender, defender losses one troop.
      else if (defRolls[0] < attRolls[0]) {
        console.log(`[0] Attacker won (D ${defRolls[0]} >= A ${attRolls[0]})`)
        defenderCurr--
        fallenDef++
      }

      // If defender has more then one troop (on defend mode)
      if (def > 1) {
        // If defender has same or higher number, attacker losses one troop.
        if (defRolls[1] >= attRolls[1]) {
          console.log(`[1] Defender won (D ${defRolls[1]} >= A ${attRolls[1]})`)
          attackerCurr--
          fallenAtt++
        }
        // If attacker rolled higher number then defender, defender losses one troop.
        else if (defRolls[1] < attRolls[1]) {
          console.log(`[1] Attacker won (D ${defRolls[1]} >= A ${attRolls[1]})`)
          defenderCurr--
          fallenDef++
        }
      }

      // Log fallen troops
      matchLog.matches[id - 1].defender.fallen = fallenDef
      matchLog.matches[id - 1].attacker.fallen = fallenAtt
    }
    // Status: 0 = defender won || 1 = attacker won
    matchLog.status = defenderCurr > 0 ? 0 : 1

    return matchLog
  }

  function handleClick() {
    setData(match(defender, attacker))
    console.log(data)
  }

  function handleDefChange(e) {
    let value = parseInt(e.target.value)

    if (value > 0 && value <= 1000)
      setDefender(value)
    else
      setDefender(1)
  }

  function handleAttChange(e) {
    let value = parseInt(e.target.value)

    if (value > 0 && value <= 1000)
      setAttacker(value)
    else
      setDefender(1)
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
                <label htmlFor={'defender'}>Defender troop amount</label><br />
                <input type={'number'} id={'defender'} name={'defender'} style={{ width: "100%" }} value={defender} onChange={handleDefChange} min={1} max={1000} />
              </p>
            </div>
          </div>
        </div>

        <div className="col col-lg-3">
          <div className="card text-white bg-danger">
            <h2 className="card-header">Attacker</h2>
            <div className="card-body">
              <p className='card-text'>
                <label htmlFor={'attacker'}>Attacker troop amount</label><br />
                <input type={'number'} id={'attacker'} name={'attacker'} style={{ width: "100%" }} value={attacker} onChange={handleAttChange} min={1} max={1000} />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-md-center p-3">
        <div className="col col-md-auto">
          <button className="btn btn-success" style={{ width: '100%' }} onClick={handleClick}>FIGHT!</button>
        </div>
      </div>

      {
        data && (
          <div className="row justify-content-md-center">
            <div className="col-lg-auto">
              <div className="card bg-secondary">
                <LogTable data={data}></LogTable>
              </div>
            </div>
          </div>
        )
      }

    </div>
  )
}
