import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/blog-post";

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor("body")}
    description={entry.getIn(["data", "description"])}
    title={entry.getIn(["data", "title"])}
    time={entry.getIn(["data", "time"])}
    place={entry.getIn(["data", "place"])}
    fbEventLink={entry.getIn(["data", "fbEventLink"])}
  />
);

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
