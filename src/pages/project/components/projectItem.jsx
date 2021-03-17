import React from 'react'

export default function ProjectItem({url,img,name,des}) {
    return (
        <a href="#" className="item col-md-6">
        <div className="wrap">
          <div className="cover">
            <img src="img/project/project (1).jpg" alt="" />
          </div>
          <div className="info">
            <div className="name">{name}</div>
            <div className="makeby">{des}</div>
          </div>
        </div>
      </a>
    )
}
