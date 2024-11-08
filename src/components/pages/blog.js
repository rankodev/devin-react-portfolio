import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import BlogItem from "../blog/blog-item";
import BlogModal from "../modals/blog-modal";
import { motion } from "framer-motion";

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: [],
      totalCount: 0,
      currentPage: 0,
      isLoading: true,
      blogModalIsOpen: false
    };

    this.getBlogItems = this.getBlogItems.bind(this);
    this.onScroll = this.onScroll.bind(this);
    window.addEventListener("scroll", this.onScroll, false);
    this.handleNewBlogClick = this.handleNewBlogClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleSuccessfulNewBlogSubmission = this.handleSuccessfulNewBlogSubmission.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(blog) {
    axios
      .delete(
        `https://api.devcamp.space/portfolio/portfolio_blogs/${blog.id}`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          blogItems: this.state.blogItems.filter(blogItem => {
            return blog.id !== blogItem.id;
          })
        });

        return response.data;
      })
      .catch(error => {
        console.log("delete blog error", error);
      });
  }

  handleSuccessfulNewBlogSubmission(blog) {
    this.setState({
      blogModalIsOpen: false,
      blogItems: [blog].concat(this.state.blogItems)
    });
  }

  handleModalClose() {
    this.setState({
      blogModalIsOpen: false
    });
  }

  handleNewBlogClick() {
    this.setState({
      blogModalIsOpen: true
    });
  }

  onScroll() {
    if (
      this.state.isLoading ||
      this.state.blogItems.length === this.state.totalCount
    ) {
      return;
    }

    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      this.getBlogItems();
    }
  }

  getBlogItems() {
    this.setState({
      currentPage: this.state.currentPage + 1
    });

    axios
      .get("/data/blogs.json")
      .then(response => {
        this.setState({
          blogItems: this.state.blogItems.concat(response.data.portfolio_blogs),
          totalCount: response.data.meta.total_records,
          isLoading: false
        });
      })
      .catch(error => {
        console.log("getBlogItems error", error);
      });
  }

  componentWillMount() {
    this.getBlogItems();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  render() {
    const blogRecords = this.state.blogItems.map((blogItem, index) => {
      return (
        <motion.div
          key={blogItem.id}
          className="admin-blog-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered effect
        >
          <BlogItem blogItem={blogItem} />
        </motion.div>
      );
    });

    return (
      <div className="blog-container">
        <BlogModal
          handleSuccessfulNewBlogSubmission={this.handleSuccessfulNewBlogSubmission}
          handleModalClose={this.handleModalClose}
          modalIsOpen={this.state.blogModalIsOpen}
        />

        {this.props.loggedInStatus === "LOGGED_IN" ? (
          <div className="new-blog-link">
            <a onClick={this.handleNewBlogClick}>
              <FontAwesomeIcon icon="plus-circle" />
            </a>
          </div>
        ) : null}
        <div className="blog-page">
          <div className="border-left"></div>
          <div className="content-container">{blogRecords}</div>
          <div className="border-right"></div>
        </div>
        {this.state.isLoading ? (
          <motion.div
            className="content-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FontAwesomeIcon icon="spinner" spin />
          </motion.div>
        ) : null}
      </div>
    );
  }
}

export default Blog;

