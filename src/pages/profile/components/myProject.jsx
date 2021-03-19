import React from "react";

export default function MyProject({
  name_project,
  name_stu,
  img_teach,
  name_teach,
  species,
  des,
}) {
  return (
    <div className="tab3">
      <div className="row">
        <ItemProject name="dự án 1" des="shop bán thú" img="" teacher="Nguyễn văn a" species="Đã xong" />
        <ItemProject name="dự án 1" des="shop bán thú" img="" teacher="Nguyễn văn a" species="Đã xong" />
        <ItemProject name="dự án 1" des="shop bán thú" img="" teacher="Nguyễn văn a" species="Đã xong" />
        <ItemProject name="dự án 1" des="shop bán thú" img="" teacher="Nguyễn văn a" species="Đã xong" />

      </div>
      <div className="btn-wrap">
        <div className="btn overlay btn-icon round">
          <img src="/images/icon-upload.svg" alt="" /> Tải lên
        </div>
      </div>
    </div>
  );
}
function ItemProject({name,des,img,teacher,species}){
  return(
<div className="col-md-6 course">
          <div className="wrap">
            <a href="#" className="cover">
              <img src="/images/img8.png" alt="" />
            </a>
            <div className="info">
              <a href="#" className="name">
                {name}
              </a>
              <p className="des">{des}</p>
            </div>
            <div className="bottom">
              <div className="teacher">
                <div className="avatar">
                  <img src="/images/avt.png" alt="" />
                </div>
                <div className="name">{teacher}</div>
              </div>
              <div className="register-btn">{species}</div>
            </div>
          </div>
        </div>
  )
}
