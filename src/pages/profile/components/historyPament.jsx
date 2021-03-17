import React from 'react'

export default function HistoryPament({name, date, money}) {
    return (
        <div className="item itemhistory">
            <div className="name">{name}</div>
            <div className="date">{date}</div>
            <div className="money">{money} VND</div>
        </div>
    )
}
