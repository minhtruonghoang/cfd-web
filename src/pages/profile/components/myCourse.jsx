import React from 'react'

export default function MyCourse({img, name, date, time, video, student, rate,status}) {
    return (
        <div className="item">
                    <div className="cover">
                      <img src="img/img3.png" alt="" />
                    </div>
                    <div className="info">
                      <a href="#" className="name">
                        {name}
                      </a>
                      <div className="date">{date}</div>
                      <div className="row">
                        <div className>
                          <img src="img/clock.svg" alt="" className="icon" />{time} giờ
                        </div>
                        <div className>
                          <img src="img/play.svg" alt="" className="icon" />{video} video
                        </div>
                        <div className>
                          <img src="img/user.svg" alt="" className="icon" />{student} học viên
                        </div>
                      </div>
                      <div className="process">
                        <div className="line">
                          <div className="rate" style={{width: {rate}+'%'}} />
                        </div>
                        {rate}%
                      </div>
                      <div className="btn overlay round btn-continue">
                        {
                            status==="0"? "Tiếp tục học"
                            :"Tạm dừng"
                        }
                      </div>
                    </div>
                  </div>
    )
}
