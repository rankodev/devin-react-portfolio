import React from "react";

const BlogFeaturedImage = props => {


  return (
    <div className="featured-image-wrapper">
      <img src={props.img} />
    </div>
  );
};

export default BlogFeaturedImage;