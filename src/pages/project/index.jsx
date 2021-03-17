import React from 'react'
import ProjectItem from './components/projectItem'

export default function Project() {
    return (
        <main className="projectpage" id="main">
        <section className="section-1">
          <div className="container">
            <h2 className="main-title">dự án</h2>
            <p className="top-des">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non
              luctus
            </p>
            <div className="list row">
                <ProjectItem ulr="" name="Đây là một chiếc web hay ho" des="Đã hoàn thành cùng sư phụ" />
                <ProjectItem ulr="" name="Đây là một chiếc web hay ho" des="Đã hoàn thành cùng sư phụ" />
                <ProjectItem ulr="" name="Đây là một chiếc web hay ho" des="Đã hoàn thành cùng sư phụ" />
                <ProjectItem ulr="" name="Đây là một chiếc web hay ho" des="Đã hoàn thành cùng sư phụ" />
                <ProjectItem ulr="" name="Đây là một chiếc web hay ho" des="Đã hoàn thành cùng sư phụ" />
                <ProjectItem ulr="" name="Đây là một chiếc web hay ho" des="Đã hoàn thành cùng sư phụ" />
                <ProjectItem ulr="" name="Đây là một chiếc web hay ho" des="Đã hoàn thành cùng sư phụ" />
                <ProjectItem ulr="" name="Đây là một chiếc web hay ho" des="Đã hoàn thành cùng sư phụ" />
                <ProjectItem ulr="" name="Đây là một chiếc web hay ho" des="Đã hoàn thành cùng sư phụ" />
                <ProjectItem ulr="" name="Đây là một chiếc web hay ho" des="Đã hoàn thành cùng sư phụ" />
            </div>
            <div className="bottom">
              <div className="btn overlay round btn-more">
                tải thêm
              </div>
            </div>
          </div>
        </section>
      </main>
    );
}
