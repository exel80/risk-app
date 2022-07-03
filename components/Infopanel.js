import { roundAmount } from "./FightButton"

export default function Infopanel({ data, changeData }) {
    let defWinChance
    let attWinChance

    defWinChance = data
        .map(item => item.status)
        .reduce((prevVal, elem) => {
            return prevVal + (elem === 0 ? 1 : 0)
        })

    attWinChance = roundAmount > defWinChance ? roundAmount - defWinChance : defWinChance - roundAmount

    defWinChance = (defWinChance / roundAmount) * 100
    attWinChance = (attWinChance / roundAmount) * 100

    function handleClick(e) {
        if (e.target.id === "defenderInfo")
            changeData(0)
        else if (e.target.id === "attackerInfo")
            changeData(1)
    }

    return (
        <div className="position-absolute" style={{ bottom: 0, left: 0, width: "100%" }}>

            <style jsx>{`
                .pointer {
                    cursor: pointer;
                    user-select: none;
                    -moz-user-select: none;
                }
            `}</style>

            <div className="d-flex justify-content-between">
                <div className="d-flex bd-highlight pointer bg-primary flex-nowrap" id="defenderInfo" onClick={handleClick}>
                    <div className="order-1 p-2" id="defenderInfo">Defender</div>
                    <div className="order-2 p-2" id="defenderInfo">~{defWinChance.toFixed(1)}%</div>
                </div>
                <div className="d-flex bd-highlight pointer bg-danger flex-nowrap" id="attackerInfo" onClick={handleClick}>
                    <div className="order-2 p-2" id="attackerInfo">Attacker</div>
                    <div className="order-1 p-2" id="attackerInfo">~{attWinChance.toFixed(1)}%</div>
                </div>
            </div>
        </div>
    )
}