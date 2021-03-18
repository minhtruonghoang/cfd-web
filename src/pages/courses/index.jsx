import React from 'react'
import CoursesItem from '../home/components/coursesItem'


export default function Courses() {
    return (
        <main className="homepage" id="main">
        <section className="section-1">
          <div className="container">
            <h2 className="main-title">KHÓA HỌC CFD</h2>
            <p className="top-des">
              The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
              has
              a more-or-less normal
            </p>
            <div className="textbox">
              <h3 className="sub-title">KHÓA HỌC</h3>
              <h2 className="main-title">ONLINE</h2>
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
        <section className="section-2 section-blue">
          <div className="container">
            <div className="textbox white">
              <h3 className="sub-title">KHÓA HỌC</h3>
              <h2 className="main-title">OFFLINE</h2>
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
      </main>
    )
}
