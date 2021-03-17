import React from 'react'

export default function Feedback({active,number, name,class_n,img,content,date}) {
    return (
        <div className={"ct "+ "ct-"+number + " " +active }>
                        <div className="info">
                          <div className="name">
                            <h4>{name}</h4>
                            <p>{class_n}</p>
                          </div>
                          <div className="quotes"><img src="/images/quotes.svg" alt="" /></div>
                        </div>
                        <div className="content">
                         {content}
                        </div>
                        <div className="bottom">
                          <a href="#" target="_blank"><img src="/images/facebook.svg" alt="" /></a>
                          <span>{date}</span>
                        </div>
                      </div>
    )
}
