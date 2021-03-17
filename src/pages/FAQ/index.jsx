import React from 'react'
import ItemFAQ from './components/itemFAQ'

export default function FAQ() {
    return (
        <main className="faqpage" id="main">
        <div className="container">
          <section>
            <h2 className="main-title">Câu hỏi thường gặp</h2>
            <div className="row">
              <div className="accordion_wrap col-md-8 offset-md-2 col-sm-12">
                <h3 className="accordion__title-main">Thông tin chung</h3>
                <ItemFAQ qus="Câu hỏi 1" ans="Câu trả lời" />
                <ItemFAQ qus="Câu hỏi 1" ans="Câu trả lời" />
                <ItemFAQ qus="Câu hỏi 1" ans="Câu trả lời" />
                <ItemFAQ qus="Câu hỏi 1" ans="Câu trả lời" />
                <ItemFAQ qus="Câu hỏi 1" ans="Câu trả lời" />
                
                
              </div>
              <div className="accordion_wrap col-md-8 offset-md-2 col-sm-12">
                <h3 className="accordion__title-main">Đăng ký, thanh toán và điểm thưởng</h3>
                <ItemFAQ qus="Câu hỏi 1" ans="Câu trả lời" />
                <ItemFAQ qus="Câu hỏi 1" ans="Câu trả lời" />
                <ItemFAQ qus="Câu hỏi 1" ans="Câu trả lời" />
                <ItemFAQ qus="Câu hỏi 1" ans="Câu trả lời" />
                <ItemFAQ qus="Câu hỏi 1" ans="Câu trả lời" />
              </div>
            </div>
          </section>
        </div>
      </main>
    )
}
