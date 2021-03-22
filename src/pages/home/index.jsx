import React from 'react'
import CoursesItem from './components/coursesItem'
import Feedback from './components/feedback'
import MainLayout from '../../layout/MainLayout'

export default function Home() {
  function ItemImg({img}){
    return
      <img data-flickity-lazyload={img} alt="" />
    
  }
    return (
    <MainLayout>

        <main className="homepage" id="main">
          <div className="banner jarallax">
            <div className="container">
              <div className="content">
                <h2 className="title">Thực Chiến</h2>
                <h2 className="title">Tạo ra sản phẩm có giá trị</h2>
                <div className="btn main round">KHÓA HỌC</div>
              </div>
            </div>
            <div className="jarallax-img">
              <img data-src="/images/bg-cover.jpg" alt="" className="lazyload" />
              <div className="video-bg lazyload" data-src="video/CFD-video-bg2.mp4" />
            </div>
          </div>
          <section className="section-courseoffline">
            <div className="container">
              <p className="top-des">
                The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                has
                a more-or-less normal
              </p>
              <div className="textbox">
                <h2 className="main-title">Khóa học Offline</h2>
              </div>
              <div className="list row">
                <CoursesItem name_course="Web Reponsive" status="0" img="" des="Học là 9, chơi là 10" teacher="Nguyễn Văn A" />
                <CoursesItem name_course="Web React" status="1" img="" des="Học là 9, chơi là 10" teacher="Trần Văn B"/>
                <CoursesItem name_course="Java" status="2" img="" des="Học là 9, chơi là 10" teacher="Trần Dần"/>
                <CoursesItem name_course="C#" status="2" img="" des="Học là 9, chơi là 10" teacher="Dương Quá"/>
                <CoursesItem name_course="UI/UX" status="0" img="" des="Học là 9, chơi là 10" teacher="Cô Long"/>
                <CoursesItem name_course="Backend" status="0" img="" des="Học là 9, chơi là 10" teacher="Trần Chân"/>
                <CoursesItem name_course="PHP" status="" img="" des="Học là 9, chơi là 10" teacher="Trương Vô Kỵ"/>
                <CoursesItem name_course="Anination" status="1" img="" des="Học là 9, chơi là 10" teacher="Hàn Long"/>
              </div>
            </div>
          </section>
          <section className="section-courseonline section-blue">
            <div className="container">
              <div className="textbox">
                <h2 className="main-title">Khóa học Online</h2>
              </div>
              <div className="list row">
                <CoursesItem name_course="Web Reponsive" status="0" img="" des="Học là 9, chơi là 10" teacher="Nguyễn Văn A" />
                <CoursesItem name_course="Web React" status="1" img="" des="Học là 9, chơi là 10" teacher="Trần Văn B"/>
                <CoursesItem name_course="Java" status="2" img="" des="Học là 9, chơi là 10" teacher="Trần Dần"/>
                <CoursesItem name_course="C#" status="2" img="" des="Học là 9, chơi là 10" teacher="Dương Quá"/>
                <CoursesItem name_course="UI/UX" status="0" img="" des="Học là 9, chơi là 10" teacher="Cô Long"/>
                <CoursesItem name_course="Backend" status="0" img="" des="Học là 9, chơi là 10" teacher="Trần Chân"/>
                <CoursesItem name_course="PHP" status="" img="" des="Học là 9, chơi là 10" teacher="Trương Vô Kỵ"/>
                <CoursesItem name_course="Anination" status="1" img="" des="Học là 9, chơi là 10" teacher="Hàn Long"/>
              </div>
              <div className="text-deco">C</div>
            </div>
          </section>
          <section className="section-different">
            <div className="container">
              <div className="row">
                <div className="titlebox col-md-6 col-sm-12 col-xs-12">
                  <h2 className="main-title white textleft">Những điều <br /><span>đặc biệt</span> tại CFD</h2>
                  <div className="videodif" data-src="video/CFD-video-intro.mp4">
                    <img src="/images/img-cfd-dac-biet.jpg" alt="" />
                    <div className="play-btn btn-video-intro">
                      <img src="/images/play-icon.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="contentbox col-md-6 col-sm-12 col-xs-12">
                  <div className="item">
                    <h4>Không cam kết đầu ra</h4>
                    <p>Với CFD thì việc cam kết đầu ra nó sẽ không có ý nghĩa nếu như cả người hướng dẫn và
                      người
                      học không thật sự tâm huyết và cố gắng. Vì thế, đội ngũ CFD sẽ làm hết sức để giúp các
                      thành
                      viên tạo ra sản phẩm có giá trị, thay vì cam kết.
                    </p>
                  </div>
                  <div className="item">
                    <h4>Không chỉ là một lớp học</h4>
                    <p>CFD không phải một lớp học thuần túy, tất cả thành viên là một team, cùng hổ trợ, chia sẻ
                      và
                      giúp đỡ nhau trong suốt quá trình học và sau này, với sự hướng dẫn tận tâm của các thành
                      viên đồng sáng lập.
                    </p>
                  </div>
                  <div className="item">
                    <h4>Không để ai bị bỏ lại phía sau</h4>
                    <p>Vì chúng ta là một team, những thành viên tiếp thu chậm sẽ được đội ngũ CFD kèm cặp đặc
                      biệt,
                      cùng sự hổ trợ từ các thành viên khác. Vì mục tiêu cuối cùng là hoàn thành
                      khóa
                      học thật tốt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-testimonial">
            <div className="container">
              <div className="textbox">
                <h2 className="main-title white">Học viên cảm nhận về CFD</h2>
              </div>
              <div className="testimonial">
                <div className="testimonial-item">
                  <div className="item">
                    <div className="text">
                      <Feedback active="active" number="1" name="Hoàng Minh" class_n="CFD5" img="" content="ờ mây zing gut jops" date="12/4/2020"/>
                      <Feedback active="" number="2" name="Dương quá" class_n="CFD5" img="" content="ờ mây zing gut jops" date="12/4/2020"/>
                      <Feedback active="" number="3" name="Cô long" class_n="CFD5" img="" content="ờ mây zing gut jops" date="12/4/2020"/>
                      <Feedback active="" number="4" name="hông thất công" class_n="CFD5" img="" content="ờ mây zing gut jops" date="12/4/2020"/>
                    </div>
                    <div className="images">
                      <div className="list">
                        <div className="carousel-cell">
                          <div className="img">
                            <picture>
                              <source media="(max-width: 767px)" srcSet="/images/Intersect.png" />
                              <img data-flickity-lazyload="/images/tes.jpg" alt="" />
                            </picture>
                          </div>
                          <Feedback active="active" number="1" name="Hoàng Minh" class_n="CFD5" img="" content="ờ mây zing gut jops" date="12/4/2020"/>
                        </div>
                        <div className="carousel-cell">
                          <div className="img">
                            <picture>
                              <source media="(max-width: 767px)" srcSet="/images/Intersect.png" />
                              <img data-flickity-lazyload="/images/tes.jpg" alt="" />
                            </picture>
                          </div>
                          <Feedback active="active" number="1" name="Hoàng Minh" class_n="CFD5" img="" content="ờ mây zing gut jops" date="12/4/2020"/>
                        </div>
                        <div className="carousel-cell">
                          <div className="img">
                            <picture>
                              <source media="(max-width: 767px)" srcSet="/images/Intersect.png" />
                              <img data-flickity-lazyload="/images/tes.jpg" alt="" />
                            </picture>
                          </div>
                          <Feedback active="active" number="1" name="Hoàng Minh" class_n="CFD5" img="" content="ờ mây zing gut jops" date="12/4/2020"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dots" />
                  <div className="btn_ctr prev" />
                  <div className="btn_ctr next" />
                </div>
              </div>
            </div>
          </section>
          <section className="section-gallery">
            <div className="textbox">
              <h2 className="main-title">Chúng ta là một team</h2>
            </div>
            <div className="list">
              {/* <ItemImg img="/images/img_team1.png"/>
              <ItemImg img="/images/img_team2.png"/>
              <ItemImg img="/images/img_team3.png"/>
              <ItemImg img="/images/img_team4.png"/>
              <ItemImg img="/images/img_team1.png"/>
              <ItemImg img="/images/img_team2.png"/>
              <ItemImg img="/images/img_team3.png"/>
              <ItemImg img="/images/img_team4.png"/> */}
              <div className="item carousel-cell">
                <img data-flickity-lazyload="/images/img_team4.png" alt="" />
              </div>
            </div>
            <div className="controls">
              <div className="btn_ctr prev" />
              <span>Trượt qua</span>
              <div className="timeline">
                <div className="process" />
              </div>
              <div className="btn_ctr next" />
            </div>
          </section>
          <section className="section-action">
            <div className="container">
              <h3>Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?</h3>
              <div className="btn main round bg-white">Đăng ký</div>
            </div>
          </section>
        </main>
        
        {/* popup video homepage */}
        <div className="popup-video" style={{display: 'none'}}>
          <div className="wrap">
            <div className="video-src" />
          </div>
          <div className="close" />
        </div>
        <div className="popup-form popup-login" style={{display: 'none'}}>
          <div className="wrap">
            {/* login-form */}
           
            {/* email form */}
            <div className="ct_email">
              <h2 className="title">Đặt lại mật khẩu</h2>
              <input type="text" placeholder="Email" />
              <div className="btn rect main btn-next">Tiếp theo</div>
              <div className="back" />
              <div className="close">
                <img src="/images/close-icon.png" alt="" />
              </div>
            </div> 
          </div>
        </div>
        <div className="popup-form popup-login" style={{display: 'none'}}>
          <div className="wrap">
            <h2 className="title">Đăng ký</h2>
            <div className="btn btn-icon rect white btn-google">
              <img src="/images/google.svg" alt="" />
              Google
            </div>
            <p className="policy">
              Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a> của CFD
            </p>
            <div className="close">
              <img src="/images/close-icon.png" alt="" />
            </div>
          </div>
        </div>
        </MainLayout>
    )
}
