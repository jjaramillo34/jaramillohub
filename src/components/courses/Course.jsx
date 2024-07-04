import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CourseData from "./courseData";
import Modal from "./modal/Modal";
import client from "../../Hooks/sanityClient";

const Course = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);
  const [data, setData] = useState([]);

  const handleModal = (id) => {
    setGetModal(true);
    setModalId(id);
  };

  const styles = {
    color: "black",
    backgroundColor: "white",
    padding: "10px",
    fontSize: "0.9rem",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    opacity: 0.9,
    backdropFilter: "blur(10px)",
    textTransform: "capitalize",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center", // Ensures the text is centered
    width: "fit-content",
    margin: "auto", // Centers the element horizontally within its parent
  };

  useEffect(() => {
    const fetchData = async () => {
      const query = '*[_type == "course"]';
      const result = await client.fetch(query);
      console.log("Result: ", result);
      setData(result);
    };

    fetchData();
    const sanityData = fetchData();
    console.log("Sanity data: ", sanityData);
  }, []);

  return (
    <>
      <div className="course-main">
        <Tabs>
          <TabList className="portfolio-tab-list" data-aos="fade-up">
            <Tab>ALL</Tab>
            <Tab>EXCEL</Tab>
            <Tab>TABLEAU</Tab>
            <Tab>ANALYSIS</Tab>
            <Tab>PYTHON</Tab>
            <Tab>OTHER</Tab>
          </TabList>

          <div className="container">
            <TabPanel>
              <div className="tab-container">
                {CourseData.map((item) => {
                  const { id, type, image, delayAnimation } = item;

                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <img src={image} alt="course project demo" />
                        <h3>
                          <span className="conent-title" style={styles}>
                            {type}
                          </span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {CourseData.filter((item) => item.tag.includes("excel")).map(
                  (item) => {
                    const { id, type, image, delayAnimation } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => handleModal(id)}
                        >
                          <img src={image} alt="course project demo" />
                          <h3>
                            <span className="conent-title" style={styles}>
                              {type}
                            </span>
                          </h3>
                        </div>
                        {/* {getModal && <Modal props={modalId} />} */}
                      </div>
                    );
                  }
                )}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {CourseData.filter((item) => item.tag.includes("tableau")).map(
                  (item) => {
                    const { id, type, image, delayAnimation } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => handleModal(id)}
                        >
                          <img src={image} alt="course project demo" />
                          <h3>
                            <span className="conent-title" style={styles}>
                              {type}
                            </span>
                          </h3>
                        </div>
                        {/* {getModal && <Modal props={modalId} />} */}
                      </div>
                    );
                  }
                )}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {CourseData.filter((item) => item.tag.includes("analysis")).map(
                  (item) => {
                    const { id, type, image, delayAnimation } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => handleModal(id)}
                        >
                          <img src={image} alt="course project demo" />
                          <h3>
                            <span className="conent-title" style={styles}>
                              {type}
                            </span>
                          </h3>
                        </div>
                        {/* {getModal && <Modal props={modalId} />} */}
                      </div>
                    );
                  }
                )}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {CourseData.filter((item) => item.tag.includes("python")).map(
                  (item) => {
                    const { id, type, image, delayAnimation } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => handleModal(id)}
                        >
                          <img src={image} alt="course project demo" />
                          <h3>
                            <span className="conent-title" style={styles}>
                              {type}
                            </span>
                          </h3>
                        </div>
                        {/* {getModal && <Modal props={modalId} />} */}
                      </div>
                    );
                  }
                )}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {CourseData.filter((item) => item.tag.includes("other")).map(
                  (item) => {
                    const { id, type, image, delayAnimation } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => handleModal(id)}
                        >
                          <img src={image} alt="course project demo" />
                          <h3>
                            <span className="conent-title" style={styles}>
                              {type}
                            </span>
                          </h3>
                        </div>
                        {/* {getModal && <Modal props={modalId} />} */}
                      </div>
                    );
                  }
                )}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
      {getModal && <Modal modalId={modalId} setGetModal={setGetModal} />}{" "}
    </>
  );
};

export default Course;
