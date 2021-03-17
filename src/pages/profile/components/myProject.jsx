import React from 'react'

export default function MyProject({name_project, name_stu, img_teach, name_teach,species,des }) {
    return (
        <div className="col-md-6 course">
        <div className="wrap">
          <a href="#" className="cover">
            <img src="img/img8.png" alt="" />
          </a>
          <div className="info">
            <a href="#" className="name">
              {name_project}
            </a>
            <p className="des">
              {des}
              </p>
          </div>
          <div className="bottom">
            <div className="teacher">
              <div className="avatar">
                <img src="img/avt.png" alt="" />
              </div>
              <div className="name">{name_teach}</div>
            </div>
            <div className="register-btn">{species}</div>
          </div>
        </div>
      </div>
    )
}
