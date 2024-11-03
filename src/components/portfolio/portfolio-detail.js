import React, { Component } from "react";
import axios from "axios";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { motion } from "framer-motion";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {},
      currentIndex: 0 // Track current image index for bubble indicators
    };

    this.handleImageChange = this.handleImageChange.bind(this);
  }

  componentWillMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get("/data/portfolios.json")
      .then((response) => {
        const portfolioItems = response.data.portfolio_items;
        const filteredPortfolioItems = portfolioItems.filter(
          (b) => b.id === Number(this.props.match.params.slug)
        );
        if (filteredPortfolioItems.length > 0)
          this.setState({
            portfolioItem: filteredPortfolioItems[0]
          });
      })
      .catch((error) => {
        console.log("getBlogItem error", error);
      });
  }

  handleImageChange(index) {
    this.setState({ currentIndex: index });
  }

  render() {
    const {
      banner_image_url,
      name,
      description,
      url
    } = this.state.portfolioItem;

    const galleryImages = banner_image_url
      ? banner_image_url.map((img) => ({
          original: img,
          thumbnail: img
        }))
      : [];

    // Custom bubble indicator component
    const CustomBubbleIndicators = ({ items, currentIndex, onClick }) => (
      <div className="bubble-indicators">
        {items.map((_, index) => (
          <div
            key={index}
            className={`bubble ${currentIndex === index ? "active" : ""}`}
            onClick={() => {
              onClick(index); // Update currentIndex and slide to the selected image
              this.galleryRef.slideToIndex(index);
            }}
          />
        ))}
      </div>
    );

    return (
      <motion.div
        className="portfolio-detail-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="portfolio-detail-top">
          <div className="portfolio-detail-left">
            <div className="featured-image">
              <ImageGallery
                ref={(el) => (this.galleryRef = el)} // Set the ref to access slideToIndex
                items={galleryImages}
                onSlide={this.handleImageChange}
                showThumbnails={false}
                showPlayButton={false} // Optional: remove play button for cleaner look
                renderItem={(item) => (
                  <img
                    src={item.original}
                    alt="Gallery"
                    style={{ width: "100%", height: "auto" }}
                  />
                )}
              />
              <CustomBubbleIndicators
                items={galleryImages}
                currentIndex={this.state.currentIndex}
                onClick={(index) => this.setState({ currentIndex: index })}
              />
            </div>

            <a
              href={url}
              className="site-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Host Link
            </a>
          </div>

          <div className="portfolio-detail-right">
            <div className="portfolio-detail-description-wrapper">
              <div className="top-details">
                <motion.div
                  className="name"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {name}
                </motion.div>
                <motion.div
                  className="description"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {description}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}
