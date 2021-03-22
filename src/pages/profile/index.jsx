import React from 'react'
import MyCourse from './components/myCourse'
import MyProject from './components/myProject'
import HistoryPament from './components/historyPament'
import Info from './components/info'
import MyCoin from './components/myCoin'
import {BrowserRouter, Switch,Route,NavLink, useRouteMatch} from 'react-router-dom'

export default function Profile() {
  let {url}=useRouteMatch();
    return (
        <main className="profile" id="main">
        <section>
          <div className="top-info">

            <div className="avatar">
              {/* <span class="text">H</span> */}
              <img src="/images/avatar-lg.png" alt="" />
              <div className="camera" />
            </div>
            <div className="name">Trương Hoàng Minh</div>
            <p className="des">Thành viên của team CFD1-OFFLINE</p>
          </div>
          <div className="container">
            <div className="tab">
              <div className="tab-title">
                <NavLink exact to={url} >Thông tin tài khoản</NavLink>
                <NavLink to={url+'/my-course'}>Khóa học của bạn</NavLink>
                <NavLink to={url+'/my-project'}>Dự án đã làm</NavLink>
                <NavLink to={url+'/history-payment'}>Lịch sử thanh toán</NavLink>
                <NavLink to={url+'/my-coin'}>Quản lý COIN của tôi</NavLink>
              </div>
              <div className="tab-content">
                  <Switch>
                    <Route  path={url+'/my-course'} component={MyCourse}  />
                    <Route  path={url+'/my-project'} component={MyProject} />
                    <Route  path={url+'/history-payment'} component={HistoryPament} />
                    <Route  path={url+'/my-coin'} component={MyCoin} />
                    <Route  path={url} component={Info} />
                  </Switch>
               
              </div>
            </div>
          </div>
        </section>
      </main>
    )
}
