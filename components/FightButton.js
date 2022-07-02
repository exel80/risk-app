import Alea from 'alea'

export default function FightButton({ defender, attacker, defenderPAtt, attackerPAtt, setData, setLoading }) {
  let loading = false

  function match(defenderTotal, attackerTotal, lesslog = false) {
    let defenderCurr = defenderTotal
    let attackerCurr = attackerTotal

    // https://github.com/nquinlan/better-random-numbers-for-javascript-mirror#alea
    const random = new Alea()

    // Status: 0 = defender won || 1 = attacker won
    // Mathces: All fight logs
    let matchLog = { status: 0, matches: [] }
    let id = 0;

    // Returns base round log
    const _log = (defrolls, attrolls) => {
      id++
      return {
        id: id - 1,
        defender: { total: parseInt(defenderTotal), current: parseInt(defenderCurr), rolls: [...defrolls] },
        attacker: { total: parseInt(attackerTotal), current: parseInt(attackerCurr), rolls: [...attrolls] },
      }
    }

    const clog = (msg) => {
      if (lesslog) return
      console.log(msg)
    }

    const diceRoll = (amount) => {
      let rolls = []

      for (let index = 0; index < amount; index++)
        rolls.push(Math.ceil(random() * 6))

      return rolls.sort((a, b) => b - a)
    }

    while (attackerCurr > 0 && defenderCurr > 0) {
      // How many dice attacker/defender is allowed to use
      // Also let user customize how many dice (unit) s/he uses per round
      let def
      if (defenderPAtt === 'x2')
        def = defenderCurr >= 2 ? 2 : defenderCurr
      else
        def = 1

      let att
      if (attackerPAtt === 'x1')
        att = 1
      else if (attackerPAtt === 'x2')
        att = attackerCurr >= 2 ? 2 : attackerCurr
      else
        att = attackerCurr >= 3 ? 3 : attackerCurr

      // Initialize fallen troops count from each side
      let fallenDef = 0
      let fallenAtt = 0

      // Roll the dice(s)
      let defRolls = diceRoll(def)
      clog(`Defender rolled ${defRolls}`)

      let attRolls = diceRoll(att)
      clog(`Attacker rolled ${attRolls}`)

      // Main log for the match
      if (!lesslog)
        matchLog.matches.push(_log(defRolls, attRolls))

      // If defender has same or higher number, attacker losses one troop.
      if (defRolls[0] >= attRolls[0]) {
        clog(`[0] Defender won (D ${defRolls[0]} >= A ${attRolls[0]})`)
        attackerCurr--
        fallenAtt++
      }
      // If attacker rolled higher number then defender, defender losses one troop.
      else if (defRolls[0] < attRolls[0]) {
        clog(`[0] Attacker won (D ${defRolls[0]} >= A ${attRolls[0]})`)
        defenderCurr--
        fallenDef++
      }

      // If defender has more then one troop (on defend mode)
      if (def > 1) {
        // If defender has same or higher number, attacker losses one troop.
        if (defRolls[1] >= attRolls[1]) {
          clog(`[1] Defender won (D ${defRolls[1]} >= A ${attRolls[1]})`)
          attackerCurr--
          fallenAtt++
        }
        // If attacker rolled higher number then defender, defender losses one troop.
        else if (defRolls[1] < attRolls[1]) {
          clog(`[1] Attacker won (D ${defRolls[1]} >= A ${attRolls[1]})`)
          defenderCurr--
          fallenDef++
        }
      }

      // Log fallen troops
      if (!lesslog) {
        matchLog.matches[id - 1].defender.fallen = fallenDef
        matchLog.matches[id - 1].attacker.fallen = fallenAtt
      }
    }
    // Status: 0 = defender won || 1 = attacker won
    matchLog.status = defenderCurr > 0 ? 0 : 1

    return matchLog
  }

  function unitValidator(value) {
    return value > 0 && value <= 1000 ? value : 1
  }

  function isLoading(bool) {
    loading = bool
    setLoading(bool)
  }

  async function handleClick() {
    if (loading) return

    isLoading(true)

    let def = unitValidator(defender)
    let att = unitValidator(attacker)

    let data = []
    data = [match(def, att)]

    for (let index = 1; index < 10000; index++) {
      data = [...data, match(def, att, true)]
    }

    setData(data)
    isLoading(false)

    // console.log(data)
  }

  return (
    <button className="btn btn-success w-100" onClick={handleClick}>FIGHT!</button>
  )
}