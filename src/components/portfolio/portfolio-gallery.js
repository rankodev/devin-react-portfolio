import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

import BlogForm from "../blog/blog-form";
import BlogFeaturedImage from "../blog/blog-featured-image";
import ImageGallery from "react-image-gallery";

export default class PortfolioGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {}
    };
  }

  componentWillMount() {
    this.getPortfolioItem();
  }

  // getPortfolioItem() {
  //   axios
  //     .get(
  //       `https://devinlu.devcamp.space/portfolio/portfolio_items/${
  //         this.props.match.params.slug
  //       }`,
  //       { withCredentials: true }
  //     )
  //     .then(response => {
  //       this.setState({
  //         portfolioItem: response.data.portfolio_item
  //       });
  //     })
  //     .catch(error => {
  //       console.log("getportfolioitem error", error);
  //     });
  // }

  getPortfolioItem() {
    axios
      .get("/data/portfolio_gallery.json")
      .then(response => {

        const portfolioItems = response.data.portfolio_items;

        console.log(this.props.match.params.slug);
        const filteredPortfolioItems = portfolioItems.filter(b => b.id === Number(this.props.portfolioId));
        if (filteredPortfolioItems.length > 0)
          this.setState({
            portfolioItem: filteredPortfolioItems[0]
          });
      })
      .catch(error => {
        console.log("getBlogItem error", error);
      });
  }

  render() {
    const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url
    } = this.state.portfolioItem;

    const bannerStyles = {
      backgroundImage: "url(" + banner_image_url + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    };

    const logoStyles = {
      width: "200px"
    };

    return (
      <div className="portfolio-detail-wrapper">
        <div className="portfolio-detail-top">
          <div className="portfolio-detail-left">

            <div className="featured-image" style={bannerStyles}>
              <img src={logo_url} style={logoStyles} />
            </div>

            <a href={url} className="site-link" target="_blank">
            Host Link
            </a>
          </div>

          <div className="portfolio-detail-right">
            <div className="portfolio-detail-description-wrapper">
              <div className="top-details">
                <div className="name">{name}</div>
                <div className="description">{description}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-detail-bottom">
          {BlogForm}
        </div>


        <div className="bottom-content-wrapper">
        </div>
      </div>
    );
  }
}

