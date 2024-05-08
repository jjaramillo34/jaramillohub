import React from "react";
import CloseImg from "../../../assets/img/cancel.svg";
import CourseData from "../courseData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CourseModal({ modalId, setGetModal }) {
  return (
    <div
      className="modal_portfolio "
      style={{
        display: "block",
        // marginTop: "50px",
        // marginLeft: "auto",
        maxWidth: "100%",
      }}
    >
      <div className="modal__outside" onClick={() => setGetModal(false)}></div>
      <div></div>
      <div className="modal__content">
        {CourseData.filter((item) => item.id === modalId).map((item) => {
          return (
            <div key={item.id} data-aos="fade">
              {/* Title */}
              <h2 className="heading mb-4 text-center">{item.type}</h2>

              {/* Image */}
              <figure
                className="modal__img mb-4"
                style={{ textAlign: "center" }}
              >
                <img
                  src={item.image}
                  alt="portfolio project demo"
                  style={{
                    maxWidth: "80%",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </figure>

              {/* Details */}
              <div className="modal__details">
                {item.modalDetails.map((details, index) => (
                  <div key={index} className="modal-details-container mb-3">
                    <div className="modal-description mt-3">
                      <p>{details.description}</p>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-2">
                        <i
                          className="fa fa-file-text-o pr-2"
                          style={{ color: "#007bff" }}
                        ></i>
                        <strong>Project:</strong>
                        <span className="ft-wt-600 uppercase pl-1">
                          {details.project.length > 35
                            ? details.project.substring(0, 35) + "..."
                            : details.project}
                        </span>
                      </div>
                      <div className="col-md-6 mb-2">
                        <i
                          className="fa fa-user-o pr-2"
                          style={{ color: "#28a745" }}
                        ></i>
                        <strong>Client:</strong>
                        <span className="ft-wt-600 uppercase pl-1">
                          {details.client}
                        </span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-2">
                        <i
                          className="fa fa-code pr-2"
                          style={{ color: "#17a2b8" }}
                        ></i>
                        <strong>Language:</strong>
                        <span className="ft-wt-600 uppercase pl-1">
                          {details.language}
                        </span>
                      </div>
                      <div className="col-md-6 mb-2">
                        <i
                          className="fa fa-external-link pr-2"
                          style={{ color: "#ffc107" }}
                        ></i>
                        <strong>Preview:</strong>
                        <a
                          className="preview-link pl-1"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          href={details.link}
                        >
                          Click here
                        </a>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-2">
                        <i
                          className="fa fa-cogs pr-2"
                          style={{ color: "#6f42c1" }}
                        ></i>
                        <strong>Tech Stack:</strong>
                        <img
                          src={details.techStack}
                          alt="tech stack"
                          style={{
                            height: "20px",
                            verticalAlign: "middle",
                            marginLeft: "8px",
                          }}
                        />
                      </div>
                      <div className="col-md-6 mb-2">
                        <i
                          className="fa fa-calendar pr-2"
                          style={{ color: "#e83e8c" }}
                        ></i>
                        <strong>Date:</strong>
                        <span className="ft-wt-600 uppercase pl-1">
                          {details.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Close Button */}
              <button
                className="close-modal"
                onClick={() => setGetModal(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  margin: "0 auto",
                  display: "block",
                }}
              >
                <img
                  src={CloseImg}
                  alt="Close modal"
                  style={{ width: "24px", height: "24px" }}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const Modal = ({ modalId, setGetModal }) => {
  //var settings = {
  //  dots: true,
  //  infinite: true,
  //  speed: 500,
  //  slidesToShow: 1,
  //  slidesToScroll: 1,
  //  draggable: true,
  //};
  // called the function
  return CourseModal({ modalId, setGetModal });
};

export default Modal;
