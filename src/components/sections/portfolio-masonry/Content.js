import React, { Component, Fragment } from 'react';
import Cta from '../../layouts/Cta';
import { Link } from 'react-router-dom';
import productcategory from '../../../data/portfoliocategory.json';
import products from '../../../data/portfolio.json';
import { getCategories } from '../../../helper/portfoliohelper';
import Masonry from 'react-masonry-component';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredProducts: products,
            activeItem: -1
        };
    }
    handleClick = id => {
        let filteredProducts = [];
        if (id === -1) {
            filteredProducts = products;
        } else {
            filteredProducts = products.filter(
                (product) => product.category.includes(id)
            );
        }
        this.setState({ filteredProducts, activeItem: id });
    };
    render() {
        const imagesLoadedOptions = {
            itemSelector: '.masonry-item',
            percentPosition: true,
            resize: true,
            fitWidth: true
        };
        const renderAll = this.state.filteredProducts.map((item, i) => (
            <div key={i} className="col-lg-4 col-sm-6 masonry-item">
                <div className="portfolio-box">
                    <div className="portfolio-img" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.img + ")" }} />
                    <div className="portfolio-desc">
                        {getCategories(item.category).slice(0, 1).map((categories, i) => (
                            <span className="portfolio-cat" key={i}>{categories.title}</span>
                        ))}
                        <h4><Link to={"/portfolio-details/" + item.id}>{item.title}</Link></h4>
                    </div>
                </div>
            </div>
        ));
        return (
            <Fragment>
                <section className="portfolio-section pt-120 pb-90">
                    <div className="container">
                        {/* portfolio filter */}
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="portfolio-filter masonry-filter">
                                    <ul>
                                        <li className={this.state.activeItem === -1 ? 'active' : ''} onClick={this.handleClick.bind(this, -1)}>All works</li>
                                        {productcategory.map((item) => (
                                            <li key={item.id} className={this.state.activeItem === parseInt(item.id) ? 'active' : ''} onClick={this.handleClick.bind(this, item.id)}>
                                                {item.title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* portfolio loop */}
                        <Masonry className="row portfolio-masonary-loop masonry-items" imagesLoadedOptions={imagesLoadedOptions}>
                            {renderAll}
                        </Masonry>
                    </div>
                </section>
                <section className="call-to-action cta-style-two mb-120">
                    <Cta />
                </section>
            </Fragment>
        );
    }
}

export default Content;