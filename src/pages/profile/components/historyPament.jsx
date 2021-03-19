import React from 'react'

export default function HistoryPament() {
    return (
        <div className="tab4" >
            <ItemHistory name="hóa học " date="12/12/2641" money="6.000.000" />
            <ItemHistory name="hóa học " date="12/12/2641" money="6.000.000" />
            <ItemHistory name="hóa học " date="12/12/2641" money="6.000.000" />
            <ItemHistory name="hóa học " date="12/12/2641" money="6.000.000" />
        </div>
    )
}
function ItemHistory({name, date, money}){
    return(
        <div className="item itemhistory">
            <div className="name">{name}</div>
            <div className="date">{date}</div>
            <div className="money">{money} VND</div>
        </div>
    )
}
