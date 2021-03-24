import React ,{useContext}from 'react'
import {Link,NavLink, useHistory} from 'react-router-dom'
import {Context} from '../core/AppProvider'

export default function Header() {
  let history = useHistory()
  let {login,user,handleLogin,Logout} = useContext(Context)
  console.log(useContext(Context))
  function openNav(){
    document.body.classList.toggle("menu-is-show");
  }
    return (
       <>
       <header id="header">
          <div className="wrap">
            <div onClick={openNav} className="menu-hambeger">
              <div className="button">
                <span />
                <span />
                <span />
              </div>
              <span className="text">menu</span> 
            </div>
            <Link to="/" className="logo">
              <img src="/images/logo.svg" alt="" /> 
              <h1>CFD</h1>
            </Link>
            <div className="right">
             {login ? <div className="have-login" >
                <div className="account">
                  <Link to="/profile" className="info">
                    <div className="name">{user.name}</div> 
                    <div className="avatar"> 
                      <img src="/images/avt.png" alt="" /> 
                    </div>
                  </Link>
                </div>
                <div className="hamberger">
                </div>
                <div className="sub">
                  <NavLink to="#">Khóa học của tôi</NavLink>
                  <NavLink to="#">Thông tin tài khoản</NavLink>
                  <NavLink to="#" onClick={Logout}>Đăng xuất</NavLink>
                </div>
              </div> 
              : <div class="not-login bg-none">
              <Link to="#" onClick={handleLogin} class="btn-register">Đăng nhập</Link>
              <Link to="login.html" class="btn main btn-open-login">Đăng ký</Link>
          </div>
              }
              
              
            </div>
          </div>
        </header>
                
        <nav className="nav">
          <ul>
            <li className="li_login">
              <Link to="#">Đăng nhập</Link>
              <Link to="#">Đăng ký</Link>
            </li>
            <li >
              <NavLink exact onClick={openNav} to="/">Trang chủ</NavLink>
            </li>
            <li>
              <NavLink onClick={openNav} to="/team">CFD Team</NavLink>
            </li>
            <li>
              <NavLink onClick={openNav} to="/course">Khóa Học</NavLink>
            </li>
            <li>
              <NavLink onClick={openNav} to="/project">Dự Án</NavLink>
            </li>
            <li>
              <NavLink onClick={openNav} to="/contact">Liên hệ</NavLink>
            </li>
          </ul>
        </nav>
        <div className="overlay_nav" />
       </>
    )
}
