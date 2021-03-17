import React from 'react'
import MyCourse from './components/myCourse'
import MyProject from './components/myProject'
import HistoryPament from './components/historyPament'

export default function Profile() {
    return (
        <main className="profile" id="main">
        <section>
          <div className="top-info">
            <div className="avatar">
              {/* <span class="text">H</span> */}
              <img src="img/avatar-lg.png" alt="" />
              <div className="camera" />
            </div>
            <div className="name">trần nghĩa</div>
            <p className="des">Thành viên của team CFD1-OFFLINE</p>
          </div>
          <div className="container">
            <div className="tab">
              <div className="tab-title">
                <a href="#" className="active">Thông tin tài khoản</a>
                <a href="#">Khóa học của bạn</a>
                <a href="#">Dự án đã làm</a>
                <a href="#">Lịch sử thanh toán</a>
                <a href="#">Quản lý COIN của tôi</a>
              </div>
              <div className="tab-content">
                <div className="tab1" style={{display: 'none'}}>
                  <label>
                    <p>Họ và tên<span>*</span></p>
                    <input type="text" placeholder="Nguyễn Văn A" />
                  </label>
                  <label>
                    <p>Số điện thoại<span>*</span></p>
                    <input type="text" placeholder="0949******" />
                  </label>
                  <label>
                    <p>Email<span>*</span></p>
                    <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
                  </label>
                  <label>
                    <p>Facebook<span>*</span></p>
                    <input type="text" placeholder="Facebook url" />
                  </label>
                  <label>
                    <p>Skype<span>*</span></p>
                    <input type="text" placeholder="Skype url" />
                  </label>
                  <div className="btn main rect">LƯU LẠI</div>
                </div>
                <div className="tab2" style={{display: 'none'}}>
                  <MyCourse img="" name="Cửu âm chân kinh" date="17/12/2020" time="69" video="77" student="12" rate="30" status="0"/>
                  <MyCourse img="" name="Cửu dương chân kinh" date="12/12/1999" time="96" video="49" student="24" rate="60" status="1"/>
                </div>
                <div className="tab3" style={{display: 'none'}}>
                  <div className="row">
                    <MyProject name_project="La hán thập bát chưởng" name_stu="Hoàng Minh" img_teach="" name_teach="Bí danh" species="Võ công" des="Đã hoàn thành"/>
                    <MyProject name_project="Đả cẩu bổng" name_stu="Hoàng Minh" img_teach="" name_teach="Hồng Thất Công" species="Võ công" des="Đã hoàn thành"/>
                  </div>
                  <div className="btn-wrap">
                    <div className="btn overlay btn-icon round">
                      <img src="img/icon-upload.svg" alt="" /> Tải lên
                    </div>
                  </div>
                </div>
                <div className="tab4" style={{display: 'none'}}>
                 <HistoryPament name="Thanh toán tiền học" date="12/12/2020"  money ="1.500.000" />
                 <HistoryPament name="Karaoke" date="25/5/2021"  money ="1.000.000" />
                 <HistoryPament name="Nhậu" date="14/2/2015"  money ="200.000" />
                 <HistoryPament name="Xăng" date="16/3/2021"  money ="50.000" />
                </div>
                <div className="tab5 cointab" style={{display: 'block'}}>
                  <div className="coininfo">
                    <div className="coininfo__box">
                      <h3><strong>Thông tin COIN</strong></h3>
                      <div className="coininfo__box-ct">
                        <div>
                          <img src="img/cfd-coin.png" alt="" />
                          <p>Bạn có <strong>300</strong> COIN</p>
                        </div>
                      </div>
                    </div>
                    <div className="coininfo__box">
                      <h3><strong>Đổi COIN</strong></h3>
                      <div className="coininfo__box-ct">
                        <label className="checkcontainer">
                          Voucher Tiki 100k
                          <input type="radio" name="radio" />
                          <span className="checkmarkradio" />
                        </label>
                        <label className="checkcontainer">
                          Voucher Tiki 200k
                          <input type="radio" name="radio" />
                          <span className="checkmarkradio" />
                        </label>
                        <label className="checkcontainer">
                          Voucher Tiki 500k
                          <input type="radio" name="radio" />
                          <span className="checkmarkradio" />
                        </label>
                        <label className="checkcontainer">
                          Thẻ nạp điện thoại 100k
                          <input type="radio" name="radio" />
                          <span className="checkmarkradio" />
                        </label>
                        <label className="checkcontainer">
                          Thẻ nạp điện thoại 200k
                          <input type="radio" name="radio" />
                          <span className="checkmarkradio" />
                        </label>
                        <label className="checkcontainer">
                          Thẻ nạp điện thoại 500k
                          <input type="radio" name="radio" />
                          <span className="checkmarkradio" />
                        </label>
                        <small><i>*Bạn có thể đổi COIN 1 lần</i></small>
                      </div>
                      <a href="javascript:void(0)" className="btn main">Đổi COIN</a>
                    </div>
                  </div>
                  <div className="coinhistory">
                    <h3><strong>Lịch sử COIN</strong></h3>
                    {/* <p>Chưa sử dụng COIN</p> */}
                    <div className="itemhistory">
                      <div className="td"><strong>COIN</strong></div>
                      <div className="td"><strong>Thời gian</strong></div>
                      <div className="td"><strong>Nội dung</strong></div>
                      <div className="td"><strong>Trạng thái</strong></div>
                    </div>
                    <div className="itemhistory">
                      <div className="td"><span className="coin red">-300</span></div>
                      <div className="td">09/09/2020</div>
                      <div className="td">Giới thiệu khóa học cho học viên mới</div>
                      <div className="td">Đã chấp nhận</div>
                    </div>
                    <div className="itemhistory">
                      <div className="td"><span className="coin">+300</span></div>
                      <div className="td">18/10/2020</div>
                      <div className="td">Dùng COIN để quy đổi sang Voucher Tiki</div>
                      <div className="td">Đã chấp nhận</div>
                    </div>
                    <div className="itemhistory">
                      <div className="td"><span className="coin red">-300</span></div>
                      <div className="td">18/10/2020</div>
                      <div className="td">Dùng COIN để đổi sang Thẻ nạp điện thoại</div>
                      <div className="td">Chờ duyệt</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
}
