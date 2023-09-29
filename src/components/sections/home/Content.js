import React, { Component, Fragment } from 'react';
import Abouttext from './Abouttext';
import Banner from './Banner';
import Blogpost from './Blogpost';
import Cta from './Cta';
import Features from './Features';
import Portfolio from './Portfolio';
import Services from './Services';
import Skills from './Skills';
import Team from './Team';
import Testimonials from './Testimonials';
import Video from './Video';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner/>
                <Abouttext/>
                <Services/>
                <Cta/>
                <Features/>
                <Video/>
                <Team/>
                <Skills/>
                <Portfolio/>
                <Testimonials/>
                <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;