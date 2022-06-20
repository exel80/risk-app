import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faBroom,
    faDice,
    faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function LogTable({ data }) {
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Defender</th>
                        <th />
                        <th />
                        <th>Attacker</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.matches.map(item => (
                            <tr key={item.id}>
                                <td>{item.defender.current} / {item.defender.total} <FontAwesomeIcon icon={faUserGroup} /></td>
                                <td>(<FontAwesomeIcon icon={faDice} /> {item.defender.rolls.join(',')})</td>
                                <td> <FontAwesomeIcon icon={faBroom} /> </td>
                                <td>{item.attacker.current} / {item.attacker.total} <FontAwesomeIcon icon={faUserGroup} /></td>
                                <td>(<FontAwesomeIcon icon={faDice} /> {item.attacker.rolls.join(',')})</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <h1 className={`display-3 ${data?.status == 0 ? 'text-primary' : 'text-danger'}`}> {data?.status == 0 ? 'DEFENDER WON!' : 'ATTACKER WON!'} </h1>

            <p>Defender lost {data?.matches[data.matches.length - 1].defender.current - data?.matches[0].defender.total} troop(s)</p>
            <p>Attacker lost {data?.matches[data.matches.length - 1].attacker.current - data?.matches[0].attacker.total} troop(s)</p>
        </div>
    )
}