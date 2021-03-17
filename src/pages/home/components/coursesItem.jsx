import React from 'react'

export default function CoursesItem({name_course, status, img, des,teacher }) {
    return (
        <div className="col-md-4 course">
        <div className="wrap">
          <a className="cover" href="#">
            <img src="/images/img1.png" alt="" />
            {
                status===0?<span className="badge b1">Sắp diễn ra</span>
                :status===1?<span className="badge b1">Đang diễn ra</span>
                :<span className="badge b1">Đã kết thúc</span>
            }
            
            <div className="hover">
              <div className="top">
                <div className="user">
                  <img src="/images/icon-user-white.svg" alt="" />
                  12</div>
                <div className="heart">
                  <img src="/images/icon-heart.svg" alt="" /> 100
                </div>
              </div>
              <div className="share">
                <img src="/images/icon-viewmore.svg" alt="" />
              </div>
            </div>
          </a>
          <div className="info">
            <a className="name" href="#">
              {name_course}
            </a>
            <p className="des">
             {des}
            </p>
          </div>
          <div className="bottom">
            <div className="teacher">
              <div className="avatar">
                <img src="/images/avt.png" alt="" />
              </div>
              <div className="name">{teacher}</div>
            </div>
            <div className="register-btn">Đăng Ký</div>
          </div>
        </div>
      </div>
    )
}
