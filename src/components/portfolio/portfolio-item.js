import React, { Component } from "react";
import { Link } from "react-router-dom";
import Truncate from "react-truncate";

export default class PortfolioItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItemClass: ""
    };
  }

  handleMouseEnter() {
    this.setState({ portfolioItemClass: "image-blur" });
  }

  handleMouseLeave() {
    this.setState({ portfolioItemClass: "" });
  }

  render() {
    const { id, name, description, thumb_image_url, logo_url } = this.props.item;
    return (
      <Link to={`/portfolio/${id}`}>
        <div
          className="portfolio-item-wrapper"
          onMouseEnter={() => this.handleMouseEnter()}
          onMouseLeave={() => this.handleMouseLeave()}
        >
          <div
            className={
              "portfolio-img-background " + this.state.portfolioItemClass
            }
            style={{
              backgroundImage: "url(" + thumb_image_url + ")"
            }}
          />

          <div className="img-text-wrapper">
            
            <div className="project-title">{name}</div>
            <div className="logo-wrapper">
              <img src={logo_url} />
            </div>
          <div>
        <div className="subtitle">
          <Truncate
            lines={2}
            ellipsis={
              <span>
                ...
              </span>
            }
          >
          {description}
          </Truncate>

          <div className="read-more"><br />Read More</div>
        </div>
      </div>
          </div>
        </div>
      </Link>
    );
  }
}
