import React, {useRef,useState}from 'react'

export default React.forwardRef( function Contact(po,ref) {
let inputRef=useRef();
function btn_focus(){
 inputRef.current.value="ad "
}
    return (

        <main className="register-course" id="main">
        <section className="section-1 wrap container">
        <button onClick={btn_focus}>focus</button>
          <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
          <p className="top-des">
            Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
            việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
          </p>
          
          <div className="form">
            <label>
              <p>Họ và tên<span>*</span></p>
              <input ref={inputRef}   type="text" name="name" placeholder="Họ và tên bạn" />
            </label>
            <label>
              <p>Số điện thoại</p>
              <input ref={ref} type="text"  name="phone" placeholder="Số điện thoại" />
            </label>
            <label>
              <p>Email<span>*</span></p>
              <input  type="text"  name="email" placeholder="Email của bạn" />
            </label>
            <label>
              <p>Website</p>
              <input  type="text"  name="website" placeholder="Đường dẫn website http://" />
            </label>
            <label>
              <p>Tiêu đề<span>*</span></p>
              <input  type="text"  name="title" placeholder="Tiêu đề liên hệ" />
            </label>
            <label>
              <p>Nội dung<span>*</span></p>
              <textarea  name id cols={30} rows={10} defaultValue={""} name="content" />
            </label>
            <div className="btn main rect"  >đăng ký</div>
          </div>
        </section>
      </main>
    )
}
)
