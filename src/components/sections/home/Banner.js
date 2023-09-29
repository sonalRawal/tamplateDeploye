import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import mainbanner from '../../../data/mainbanner.json';

class Banner extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            fade: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    },
                },
            ]
        }
        return (
            <section className="banner-section" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/banner/01.jpg)" }}>
                <Slider {...settings} className="slider-active" id="bannerSliderOne">
                    {mainbanner.map((item, i) => (
                        <div className="single-banner" key={i}>
                            <div className="container container-custom">
                                <div className="row extra-left">
                                    <div className="col-lg-8">
                                        <div className="banner-text">
                                            <h1>{item.title}</h1>
                                            <p>{item.subtext}</p>
                                            <div className="btn-wrap">
                                                <Link to="/contact" className="main-btn btn-filled">Get Started Now</Link>
                                                <Link to="/about" className="main-btn btn-borderd">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="banner-shape-one" />
                <div className="banner-shape-two" />
            </section>
        );
    }
}

export default Banner;