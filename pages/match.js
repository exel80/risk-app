export default function match(defenderTotal, attackerTotal) {
    let defenderCurr = defenderTotal
    let attackerCurr = attackerTotal

    // Status: 0 = defender won || 1 = attacker won
    // Mathces: All fight logs
    let matchLog = {status: 0, matches: []}
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
        let def = defenderCurr >= 2 ? 2 : defenderCurr
        let att = attackerCurr >= 3 ? 3 : attackerCurr

        let defRolls = diceRoll(def)
        console.log(`Defender rolled ${defRolls}`)

        let attRolls = diceRoll(att)
        console.log(`Attacker rolled ${attRolls}`)

        // If defender has same or higher number, attacker losses one troop.
        if (defRolls[0] >= attRolls[0]) {
            console.log(`[0] Defender won (D ${defRolls[0]} >= A ${attRolls[0]})`)
            attackerCurr--
        }
        // If attacker rolled higher number then defender, defender losses one troop.
        else if (defRolls[0] < attRolls[0]) {
            console.log(`[0] Attacker won (D ${defRolls[0]} >= A ${attRolls[0]})`)
            defenderCurr--
        }

        // If defender has more then one troop (on defend mode)
        if (def > 1) {
            // If defender has same or higher number, attacker losses one troop.
            if (defRolls[1] >= attRolls[1]) {
                console.log(`[1] Defender won (D ${defRolls[1]} >= A ${attRolls[1]})`)
                attackerCurr--
            }
            // If attacker rolled higher number then defender, defender losses one troop.
            else if (defRolls[1] < attRolls[1]) {
                console.log(`[1] Attacker won (D ${defRolls[1]} >= A ${attRolls[1]})`)
                defenderCurr--
            }
        }

        matchLog.matches.push(_log(defRolls, attRolls))
    }

    matchLog.status = defenderCurr > 0 ? 0 : 1
    return matchLog
}