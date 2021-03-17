import React from 'react'

export default function ItemFAQ({qus,ans}) {
    return (
        <div className="accordion">
                  <div className="accordion__title">
                    <h2><strong>{qus}</strong></h2>
                  </div>
                  <div className="content">
                   {ans}
                  </div>
                </div>
    )
}
