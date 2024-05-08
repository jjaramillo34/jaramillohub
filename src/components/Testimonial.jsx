import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import TestimonialData from "./testimonialData";

export default class Testimonials extends Component {
    render() {
      return (
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
          //transitionTime={1000}
        >
            {TestimonialData.map((item) => {
                const { id, name, imageUrl, title, delayAnimation, description} = item;
                return (
                    
                    <div key={id} data-aos="fade-up" data-aos-delay={delayAnimation}>
                        <div className="testimonial">
                            <div className="testimonial__content">
                                <div className="testimonial__info">
                                    <div className="testimonial__img">
                                        <img src={imageUrl} alt="testimonial"/>
                                    </div>
                                    <div className="testimonial__name">
                                        <h4>{name}</h4>
                                    </div>
                                    <div className="testimonial__position">
                                        <p>{title}</p>
                                    </div>
                                    <div className="testimonial__social">
                                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        
                                    </div>
                                    <div className="testimonial__description">
                                    <p>
                                        <blockquote>
                                            {description}
                                        </blockquote>
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

        </Carousel>
      );
    }
  }

