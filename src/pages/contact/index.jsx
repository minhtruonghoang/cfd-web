import React, {useRef,useState}from 'react';

export default  function Contact() {
  let[form,setForm]=useState({
    name:"",
    phone:"",
    email:"",
    website:"",
    title:"",
    content:"",
  })
  let[error,setError]=useState({
    name:"",
    phone:"",
    email:"",
    website:"",
    title:"",
    content:"",
  })
  function inputChange(e){
let name= e.target.name
let value= e.target.value
setForm({
  ...form,
  [name]:value
})
  }
  function btnSubmit(){
    console.log(form)
    let errorObj={};
    if(form.name===""){
      errorObj.name="ho va ten khong duoc de trong"
    }
    else if(!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i.test(form.name)){
      errorObj.name="vui long nhap dung ho ten"
    }
    if(form.phone===""){
      errorObj.phone="sdt khong duoc de trong"
    }
    else if(!/(84|0[3|5|7|8|9])+([0-9]{8})\b/i.test(form.phone)){
      errorObj.phone="vui long nhap sdt hop le"
    }
    if(form.email===""){
      errorObj.email="email khong duoc de trong"
    }
    else if(!/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i.test(form.email)){
      errorObj.email="vui long nhap dung email"
    }
    if(form.title===""){
      errorObj.title="title khong duoc de trong"
    }
    if(form.website && !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(form.website)){
      errorObj.title="vui long nhap dung dinh dang url"
    }
    if(form.content===""){
      errorObj.content="content khong duoc de trong"
    }
    setError(error);

    if(Object.keys(errorObj).length===0){
      alert("thnahf cong")
    }
    
  }
    return (
        <main className="register-course" id="main">
        <section className="section-1 wrap container">
          <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
          <p className="top-des">
            Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
            việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
          </p>
          
          <div className="form">
            <label>
              <p>Họ và tên<span>*</span></p>
              <input value={form.name} onChange={inputChange} type="text" name="name"  placeholder="Họ và tên bạn" />
              {error.name?<p className="text-error">{error.name}</p>:null}
            </label>
            <label>
              <p>Số điện thoại</p>
              <input value={form.phone} onChange={inputChange} type="text" name="phone"  placeholder="Số điện thoại" />
              {error.phone?<p className="text-error">{error.phone}</p>:null}
            </label>
            <label>
              <p>Email<span>*</span></p>
              <input value={form.email} onChange={inputChange}  type="text" name="email"  placeholder="Email của bạn" />
              {error.email?<p className="text-error">{error.email}</p>:null}
            </label>
            <label>
              <p>Website</p>
              <input value={form.website} onChange={inputChange}  type="text" name="website"  placeholder="Đường dẫn website http://" />
              {error.website?<p className="text-error">{error.website}</p>:null}
            </label>
            <label>
              <p>Tiêu đề<span>*</span></p>
              <input value={form.title} onChange={inputChange}  type="text" name="title"  placeholder="Tiêu đề liên hệ" />
              {error.title?<p className="text-error">{error.title}</p>:null}
            </label>
            <label>
              <p>Nội dung<span>*</span></p>
              <textarea value={form.content} onChange={inputChange}   cols={30} rows={10}  name="content" />
              {error.content?<p className="text-error">{error.content}</p>:null}
            </label>
            <div className="btn main rect" onClick={btnSubmit}  >đăng ký</div>
          </div>
        </section>
      </main>
    )
}

