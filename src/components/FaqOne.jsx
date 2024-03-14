import React from "react";

const FaqOne = ({questions}) => {
  return (
    <>
      {/* FAQs area start */}
      <section className="faq__area pt-170 pb-150">
        <div className="container pt-150">
          <div className="row">
            <div className="col-12">
              <div className="faq__content" data-aos="fade-up">
                <h3 className="sec-title text-white">
                  Aqui algumas dúvidas<br />que você pode ter
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptate dolores error esse aliquid, explicabo harum temporibus dicta, rem magnam iste itaque quidem sint placeat maxime dolore a exercitationem facere.</p>
              </div>
            </div>
            <div className="col-12">
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
