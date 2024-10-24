import React from "react";
import { Link } from "react-router-dom";
import striptags from "striptags";
import Truncate from "react-truncate";

const BlogItem = props => {
  const {
    id,
    blog_status,
    content,
    title,
    date,
    featured_image_url
  } = props.blogItem;

  return (
    <div className="blog-skeleton">
      <div className="featured-image">
        <img src={featured_image_url} width="100px" height="100px" margin="0px"/>
      </div>
      <Link to={`/b/${id}`}>
        <h1>{title}</h1>
      </Link>
      <div className="blog-date"><h1>{date}</h1></div>
      <div className="blog-content">
        <Truncate
          lines={3}
          ellipsis={
            <span>
              ...<Link to={`/b/${id}`}>Read more</Link>
            </span>
          }
        >
          {striptags(content)}
        </Truncate>
      </div>
    </div>
  );
};

export default BlogItem;
