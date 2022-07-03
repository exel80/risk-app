import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDice,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons"

import Infopanel from "./Infopanel"

export default function DataTable({ dataChunk }) {
  const [data, setData] = useState(dataChunk[0])

  useEffect(() => {
    setData(dataChunk[0])
  }, [dataChunk])

  // @Int winner: 0 = Defender || 1 = Attacker 
  function changeData(winner) {
    if (winner === 0) {
      let _data = dataChunk.find(elem => elem.status === 0)

      if (_data !== undefined)
        setData(_data)
    }
    else if (winner === 1) {
      let _data = dataChunk.find(elem => elem.status === 1)

      if (_data !== undefined)
        setData(_data)
    }
  }

  return (
    <div className="card bg-secondary">
      <style jsx>{`
        .shadow-black {
          text-shadow: 2px 2px 5px black;
        }

        .custom-white {
          font-size: 12px;
          text-shadow: -1px -1px 1px rgba(0,0,0,0.3);
          color: #CCC;
        }
      `}</style>

      <div className="table-responsive">

        <div className="position-absolute custom-white m-1" style={{ right: 10 }}>
          Generated at {data.createdAt}
        </div>

        <div className="card-body pb-4 position-relative text-center text-white">
          <h1 className={`display-3 ${data?.status == 0 ? 'text-primary' : 'text-danger'}`} style={{ textShadow: `2px 2px 5px ${data?.status == 0 ? "darkblue" : "darkred"}` }}> {data?.status == 0 ? 'DEFENDER WON!' : 'ATTACKER WON!'} </h1>
          <span className="shadow-black">
            {
              data?.status == 0
                ? <p>Defender lost {data?.matches[data.matches.length - 1].defender.current - data?.matches[0].defender.total} troop(s)</p>
                : <p>Attacker lost {data?.matches[data.matches.length - 1].attacker.current - data?.matches[0].attacker.total} troop(s)</p>
            }
          </span>

          <Infopanel
            data={dataChunk}
            changeData={changeData}
          />
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
    </div>
  )
}