import React from "react";
import { Link } from "react-router-dom";

const questions = [
  {
    id: 1,
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptate dolores error esse aliquid, explicabo harum temporibus dicta, rem magnam iste itaque quidem sint placeat maxime dolore a exercitationem facere.'
  },
  {
    id: 2,
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptate dolores error esse aliquid, explicabo harum temporibus dicta, rem magnam iste itaque quidem sint placeat maxime dolore a exercitationem facere.'
  },
  {
    id: 3,
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptate dolores error esse aliquid, explicabo harum temporibus dicta, rem magnam iste itaque quidem sint placeat maxime dolore a exercitationem facere.'
  }
]

const FaqOne = () => {
  return (
    <>
      {/* FAQs area start */}
      <section className="faq__area pt-170 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
              <div className="faq__content" data-aos="fade-up">
                <span className="team__subtitle-5 heading-animation text-green">
                  AJUDA
                </span>
                <h3 className="sec-title text-white">
                  Aqui algumas dúvidas<br />que você pode ter
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptate dolores error esse aliquid, explicabo harum temporibus dicta, rem magnam iste itaque quidem sint placeat maxime dolore a exercitationem facere.</p>
                <div className="db-arrow-up">
                  <Link to="/about">
                    <img
                      className="img"
                      src="assets/imgs/icon/arrow-xxl-2.png"
                      alt="Arrow Icon"
                    />
                    <img
                      className="img-2"
                      src="assets/imgs/icon/arrow-xxl-2.png"
                      alt="Arrow Icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
              <div className="faq__list">
                <div className="accordion" id="accordionExample">
                  {questions.map(question => {
                    return (
                      <div key={question.id} className="accordion-item" data-aos="fade-up">
                        <h2 className="" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            {question.question}
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>{question.answer}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs area end */}
    </>
  );
};

export default FaqOne;
