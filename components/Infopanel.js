export default function Infopanel({ data }) {
    let defWinChance
    let attWinChance

    defWinChance = data
        .map(item => item.status)
        .reduce((prevVal, elem) => {
            return prevVal + (elem === 0 ? 1 : 0)
        })

    attWinChance = 1000 > defWinChance ? 1000 - defWinChance : defWinChance - 1000
    
    defWinChance = (defWinChance / 1000) * 100
    attWinChance = (attWinChance / 1000) * 100


    return (
        <div className="position-absolute" style={{ bottom: 0, left: 0, width: "100%" }}>
            <div className="d-flex justify-content-between">
                <div className="d-flex bd-highlight bg-success flex-nowrap">
                    <div className="order-1 p-2">Defender</div>
                    <div className="order-2 p-2">~{defWinChance.toFixed(1)}%</div>
                </div>
                <div className="d-flex bd-highlight bg-danger flex-nowrap">
                    <div className="order-2 p-2">Attacker</div>
                    <div className="order-1 p-2">~{attWinChance.toFixed(1)}%</div>
                </div>
            </div>
        </div>
    )
}