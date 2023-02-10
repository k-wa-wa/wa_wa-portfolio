import React from "react";
import { graphql } from "gatsby";

import BlogsTemplate from "../../components/templates/blog/blogsTemplate";
import BlogList from "../../components/organisms/blog/blogList";
import { MicrocmsBlogConnection } from "../../graphqlTypes";

type Props = {
  data: {
    allMicrocmsBlog: MicrocmsBlogConnection;
  };
};
const BlogIndex: React.FC<Props> = ({ data }) => {
  return (
    <BlogsTemplate>
      <BlogList allMicrocmsBlog={data.allMicrocmsBlog} />
    </BlogsTemplate>
  );
};

export default BlogIndex;

export const query = graphql`
  query BlogIndex {
    allMicrocmsBlog {
      edges {
        node {
          blogId
          title
          body
          publishedAt
          image {
            url
          }
        }
      }
    }
  }
`;
