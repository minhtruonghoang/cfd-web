import React from 'react'

export default function Member({name, img, des }) {
    return (
        <div className="wrap">
                  <div className="cover">
                    <img src="/images/thumb-member.jpg" alt="" />
                  </div>
                  <div className="info">
                    <div className="name">
                      {name}
                    </div>
                    <p className="title">{des}</p>
                  </div>
                </div>
    )
}
