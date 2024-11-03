import React, { Component } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [],
      filteredData: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.setState({ filteredData: [] });
    } else {
      this.setState(prevState => ({
        filteredData: prevState.data.filter(item => item.category === filter)
      }));
    }
  }

  getPortfolioItems() {
    axios
      .get("/data/portfolios.json")
      .then(response => {
        const portfolioItems = response.data.portfolio_items;
        this.setState({ data: portfolioItems, filteredData: portfolioItems });
      })
      .catch(error => {
        console.error("Error fetching portfolio items:", error);
      });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  portfolioItems() {
    const itemsToRender = this.state.filteredData.length > 0 ? this.state.filteredData : this.state.data;

    return itemsToRender.map((item, index) => (
      <motion.div
        key={item.id}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      >
        <PortfolioItem item={item} />
      </motion.div>
    ));
  }

  render() {
    return (
      <div className="homepage-wrapper">
        <div className="filter-links">
          <button className="btn" onClick={() => this.handleFilter("Studio Work")}>
            Studio Work
          </button>
          <button className="btn" onClick={() => this.handleFilter("Game Projects")}>
            Game Projects
          </button>
          <button className="btn" onClick={() => this.handleFilter("Other")}>
            Other
          </button>
          <button className="btn" onClick={() => this.handleFilter("CLEAR_FILTERS")}>
            All Items
          </button>
        </div>
        <div className="portfolio-items-wrapper">
          <AnimatePresence>
            {this.portfolioItems()}
          </AnimatePresence>
        </div>
      </div>
    );
  }
}
