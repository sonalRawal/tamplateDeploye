import React, { Component } from 'react';

class Abouttext extends Component {
    render() {
        return (
            <section className="about-section about-style-three pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="about-tile-gallery-two">
                                <img src={process.env.PUBLIC_URL + "/assets/img/tile-gallery/04.jpg"} alt="img" className="image-one" />
                                <img src={process.env.PUBLIC_URL + "/assets/img/tile-gallery/05.jpg"} alt="img" className="image-two" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="about-text pl-30">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">About us</span>
                                    <h2>Onitir help businesses elevate their value.</h2>
                                </div>
                                <p>
                                    Over the years, a wide range of developments and innovations in the global IT
                                    arena have led to many new IT-enabled devices and services being produced. Moreover, there
                                    is need for IT today, not just in urban areas but rural regions as well.
          </p>
                                <div className="about-extra">
                                    Over the years, a wide range of develop ments and innovations in the global IT arena have
                                    led to many new IT-enabled devices and services being produced.
            <div className="experience-tag">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/experience-tag.png"} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Abouttext;