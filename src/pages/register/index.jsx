import React,{useState} from 'react'

export default function Register() {
    let [form,setForm]=useState({
        name:"",
        phone:"",
        email:"",
        fb:"",
        type:"",
        feedback:"",
        coin:false
    });
    let [error,setError]=useState({
        name:"",
        phone:"",
        email:"",
        fb:"",
        feedback:"",
    })
    function inputForm(e){
        console.log(e);
        let name = e.target.name;
        let checked =e.target.checked;
        let value = e.target.value;
        
        let typeInput=e.target.type;
        if(typeInput==="checkbox"){
         
            setForm({
                ...form,
                [name]:checked,
            })
        }
        else{
            setForm({
                ...form,
                [name]:value,
            })
        }
    }
    
    function Submit(){
     let type = document.getElementById("type").textContent;
        if(type==="Thanh toán tiền mặt"){
            setForm({
                ...form,
                type:0,
            }) 
        }
        else{
            setForm({
                ...form,
                type:1,
            }) 
        }
        let errorObj={};
        if(form.name===""){
            errorObj.name ="tên không được để trống"
        }
        if(form.email===""){
            errorObj.email ="email không được để trống"
        }
        if(form.phone===""){
            errorObj.phone ="sđt không được để trống"
        }
        if(form.feedback===""){
            errorObj.feedback ="content không được để trống"
        }
        if(form.fb===""){
            errorObj.fb ="facebook không được để trống"
        }
        setError(errorObj)
        console.log(form)
    }
    return (
        <main className="register-course" id="main">
        <section>
          <div className="container">
            <div className="wrap container">
              <div className="main-sub-title">ĐĂNG KÝ</div>
              <h1 className="main-title">Thực chiến front-end căn bản </h1>
              <div className="main-info">
                <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
              </div>
              <div className="form">
                <label>
                  <p>Họ và tên<span>*</span></p>
                  <input onChange={inputForm} name="name" type="text" placeholder="Họ và tên bạn" />
                  {error.name && <p className="text-error">{error.name}</p> }
                </label>
                <label>
                  <p>Số điện thoại<span>*</span></p>
                  <input onChange={inputForm} name="phone" type="text" placeholder="Số điện thoại" />
                  {error.phone && <p className="text-error">{error.phone}</p> }
                </label>
                <label>
                  <p>Email<span>*</span></p>
                  <input onChange={inputForm} name="email" type="text" placeholder="Email của bạn" />
                  {error.email && <p className="text-error">{error.email}</p> }
                </label>
                <label>
                  <p>URL Facebook<span>*</span></p>
                  <input onChange={inputForm} name="fb" type="text" placeholder="https://facebook.com" />
                  {error.fb && <p className="text-error">{error.fb}</p> }
                </label>
                <label className="disable">
                  <p>Sử dụng COIN</p>
                  <div  className="checkcontainer">
                    Hiện có <strong>300 COIN</strong>
                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                    {/* Cần ít nhất 200 COIN để giảm giá */}
                    <input onChange={inputForm} type="checkbox" name="coin" defaultChecked="checked" />
                    <span className="checkmark" />
                  </div>
                </label>
                <label>
                  <p>Hình thức thanh toán</p>
                  <div className="select">
                    <div value="" onChange={inputForm} className="head" id="type">Chuyển khoản</div>
                    <div className="sub" name="type" id="">
                      <a   href="#">Chuyển khoản</a>
                      <a  href="#">Thanh toán tiền mặt</a>
                    </div>
                  </div>
                </label>
                <select name="sex" id="">
                  <option value="1">nam</option>
                  <option value="2">nữ</option>
                </select>
                <label>
                  <p>Ý kiến cá nhân</p>
                  <input onChange={inputForm} name="feedback" type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                  {error.feedback && <p className="text-error">{error.feedback}</p> }
                </label>
                <div className="btn main rect" onClick={Submit}>đăng ký</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
}
