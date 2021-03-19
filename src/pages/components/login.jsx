import React, { useImperativeHandle,useState } from 'react';
import ReactDom, { createPortal } from 'react-dom'

export default React.forwardRef( function Login(prop,ref) {
  let [isOpen,setOpen]= useState();
  useImperativeHandle(ref,()=>{
   return{
     open, close
   }
  },[]
  )
  function open(){
    setOpen(true)
  }
  function close(){
    setOpen(false)
  }
    return React,createPortal (
      <div className="ct_login" style={{display:isOpen?'flex':'none'}}>
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
    </div>,
    document.getElementById("root2")
    )
}
)
