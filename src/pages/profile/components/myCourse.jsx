import React from 'react'

export default function MyCourse() {
    return (
      <div className="tab2" >
        <ItemCourse img="" name="React" date="12/12/4545" time="56" video="12" student="12" rate="30" status="0"/>
        <ItemCourse img="" name="React" date="12/12/4545" time="56" video="12" student="12" rate="90" status="1"/>
        <ItemCourse img="" name="React" date="12/12/4545" time="56" video="12" student="12" rate="12" status="1"/>
        <ItemCourse img="" name="React" date="12/12/4545" time="56" video="12" student="12" rate="2" status="0"/>
        <ItemCourse img="" name="React" date="12/12/4545" time="56" video="12" student="12" rate="50" status="0"/>
      </div>
    )
}
function ItemCourse({img, name, date, time, video, student, rate,status}){
  return(
    <div className="item">
    <div className="cover">
      <img src="/images/img3.png" alt="" />
    </div>
    <div className="info">
      <a href="#" className="name">
        {name}
      </a>
      <div className="date">{date}</div>
      <div className="row">
        <div className>
          <img src="/images/clock.svg" alt="" className="icon" />{time} giờ
        </div>
        <div className>
          <img src="/images/play.svg" alt="" className="icon" />{video} video
        </div>
        <div className>
          <img src="/images/user.svg" alt="" className="icon" />{student} học viên
        </div>
      </div>
      <div className="process">
        <div className="line">
          <div className="rate" style={{width: rate +'%'}} />
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
