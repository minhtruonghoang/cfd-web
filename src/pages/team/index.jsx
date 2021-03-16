import React from 'react'
import Member from './components/member'

export default function Team() {
    return (
        <main className="team" id="main">
        <section>
          <div className="container">
            <div className="top">
              <h2 className="main-title">cfd team</h2>
              <p className="top-des">Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt
                elementum
                sem non luctus
              </p>
            </div>
            <div className="list row">
              <div className="item col-md-6 col-sm-6">
                <Member name="Trần Văn A" des="Dec full stack"/>
              </div>
              <div className="item col-md-6 col-sm-6">
              <Member name="Dương Văn B" des="Dec full stack"/>
              </div>
              <div className="item col-md-6 col-sm-6">
              <Member name="Hoàng VĂn C" des="Dec full stack"/>
              </div>
              <div className="item col-md-6 col-sm-6">
              <Member name="Chị Dậu" des="Dec full stack"/>
              </div>
              <div className="item col-md-3 col-sm-4 col-xs-6">
              <Member name="Người lái đò trên sông đà" des="Học viên"/>
              </div>
              <div className="item col-md-3 col-sm-4 col-xs-6">
              <Member name="Mị" des="Dec full stack"/>
              </div>
              <div className="item col-md-3 col-sm-4 col-xs-6">
              <Member name="A Sử" des="Học viên"/>
              </div>
              <div className="item col-md-3 col-sm-4 col-xs-6">
              <Member name="Hồng Thất Công" des="Học viên"/>
              </div>
              <div className="item col-md-3 col-sm-4 col-xs-6">
              <Member name="Dương Tiễn" des="Học viên"/>
              </div>
              <div className="item col-md-3 col-sm-4 col-xs-6">
              <Member name="Vợ Nhặt" des="Học viên"/>
              </div>
              <div className="item col-md-3 col-sm-4 col-xs-6">
              <Member name="Trần Hạo Nam" des="Học viên"/>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
}
