import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
    faDice,
    faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function LogTable({ data }) {
    return (
        <div className="table-responsive">

            <div className="card-body text-center text-white">
                <h1 className={`display-3 ${data?.status == 0 ? 'text-primary' : 'text-danger'}`} style={{ textShadow: `2px 2px 5px ${data?.status == 0 ? "darkblue" : "darkred"}` }}> {data?.status == 0 ? 'DEFENDER WON!' : 'ATTACKER WON!'} </h1>
                <span style={{ textShadow: "2px 2px 5px black" }}>
                    {
                        data?.status == 0
                            ? <p>Defender lost {data?.matches[data.matches.length - 1].defender.current - data?.matches[0].defender.total} troop(s)</p>
                            : <p>Attacker lost {data?.matches[data.matches.length - 1].attacker.current - data?.matches[0].attacker.total} troop(s)</p>
                    }
                </span>
            </div>

            <table className="table table-sm table-dark table-striped m-0">
                <thead>
                    <tr>
                        <th>Defender</th>
                        <th />
                        <th />
                        <th>Attacker</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.matches.map(item => (
                            <tr key={item.id}>
                                <td className="text-nowrap">{item.defender.current} / {item.defender.total} <FontAwesomeIcon icon={faUserGroup} className="fa-xs" /></td>
                                <td className="text-nowrap">(<FontAwesomeIcon icon={faDice} className="fa-sm" /> {item.defender.rolls.join(',')})</td>
                                <td className="text-nowrap">
                                    {item.defender.fallen <= 0 ? <span className="text-success p-1">0</span> : <span className="text-danger p-1">-{item.defender.fallen}</span>}
                                    /
                                    {item.attacker.fallen <= 0 ? <span className="text-success p-1">0</span> : <span className="text-danger p-1">-{item.attacker.fallen}</span>}
                                </td>
                                <td className="text-nowrap">{item.attacker.current} / {item.attacker.total} <FontAwesomeIcon icon={faUserGroup} className="fa-xs" /></td>
                                <td className="text-nowrap">(<FontAwesomeIcon icon={faDice} className="fa-sm" /> {item.attacker.rolls.join(',')})</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}