import React,{useState} from 'react';


export default function Info() {
    let[form,setForm]=useState({
        name:"",
        phone:"",
        fb:"",
        skype:""
    })
    let[error,setError]=useState({
        name:"",
        phone:"",
        fb:"",
        skype:""
    })
    function Input_form(e){
        let name=e.target.name;
        let value=e.target.value;
        setForm({
            ...form,
            [name]:value
        })
    }
    function Submit_Info(){
        let errorOjb={};
        if(form.name===""){
            errorOjb.name="tên không được để trống"
        }
        if(form.phone===""){
            errorOjb.phone="sđt không được để trống"
        }
        if(form.fb===""){
            errorOjb.fb="facebook không được để trống"
        }
        if(form.skype===""){
            errorOjb.skype="skype không được để trống"
        }
        console.log(error)
        setError(errorOjb)
       if(Object.keys(errorOjb).length===0){
        alert("thnahf coong")
       }
    }
    return (
        <div className="tab1 active">
                  <label>
                    <p>Họ và tên<span>*</span></p>
                    <input onChange={Input_form} type="text" placeholder="Nguyễn Văn A" name="name" />
                    {error.name && <p className='text-error'>{error.name}</p>}
                  </label>
                  <label>
                    <p>Số điện thoại<span>*</span></p>
                    <input onChange={Input_form} type="text" placeholder="0949******" name="phone" />
                    {error.phone && <p className='text-error'>{error.phone}</p>}
                  </label>
                  <label>
                    <p>Email<span>*</span></p>
                    <input onChange={Input_form} value="vuong.dang@dna.vn" disabled type="text" name="email" />
                  </label>
                  <label>
                    <p>Facebook<span>*</span></p>
                    <input onChange={Input_form} type="text" placeholder="Facebook url" name="fb" />
                    {error.fb && <p className='text-error'>{error.fb}</p>}
                  </label>
                  <label>
                    <p>Skype<span>*</span></p>
                    <input onChange={Input_form} type="text" placeholder="Skype url" name="skype" />
                    {error.skype && <p className='text-error'>{error.skype}</p>}
                  </label>
                  <div onClick={Submit_Info} className="btn main rect">LƯU LẠI</div>
                </div>
    )
}
