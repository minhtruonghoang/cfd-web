import React, {useImperativeHandle, useRef,useState } from 'react'
import ReactDom from 'react-dom'

export default React.forwardRef( function Login({props,ref}) {
  let [isOpen,SetOpen]=useState(false);
  
  useImperativeHandle(ref,() => {
      return{
        open,close
      }
    },
    [],
  )
  function open(){
    SetOpen(true)
  }
  function close(){
    SetOpen(false)
  }
    return ReactDom.createPortal (
        <div className="ct_login" style={{display: isOpen?'flex':'none'}}>
              <h2 className="title">Đăng nhập</h2>
              <input type="text" placeholder="Email / Số điện thoại" />
              <input type="password" placeholder="Mật khẩu" />
              <div className="remember">
                <label className="btn-remember">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <p>Nhớ mật khẩu</p>
                </label>
                <a href="#" className="forget">Quên mật khẩu?</a>
              </div>
              <div className="btn rect main btn-login">đăng nhập</div>
              <div className="text-register" style={{}}>
                <strong>hoặc đăng ký bằng</strong>
              </div>
              <div>
                <div className="btn btn-icon rect white btn-google">
                  <img src="/images/google.svg" alt="" />
                  Google
                </div>
              </div>
              <div className="close">
                <img src="/images/close-icon.png" alt="" />
              </div>
            </div>
    ),
    document.getElementById("root2")
})
