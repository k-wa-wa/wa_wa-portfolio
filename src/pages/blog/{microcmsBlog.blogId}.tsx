import React from "react";
import { PageProps, graphql } from "gatsby";
import { load } from "cheerio";

import BlogTemplate from "../../components/templates/blog/blogTemplate";
import Toc from "../../components/organisms/tocBox";
import BlogBody from "../../components/organisms/blog/blogBody";
import ProfileBox from "../../components/organisms/profileBox";

const createToc = (body: string) => {
  const $ = load(body);
  const headings = $("h1, h2, h3").toArray();
  return headings.map((data) => ({
    tagName: data.tagName,
    text: $(data).text(),
    id: data.attribs.id,
    name: data.name,
  }));
};

const parseTags = (
  _tags: readonly ({ tagName: string | null } | null)[] | null | undefined,
) => {
  if (!_tags) {
    return [];
  }
  const tags = _tags.flatMap((_t) =>
    _t ? (_t.tagName ? _t.tagName : []) : [],
  );
  return [...new Set(tags)];
};

const BlogPage: React.FC<PageProps<GatsbyTypes.BlogIdQuery>> = ({ data }) => {
  const blog = data.microcmsBlog;
  const body = String(blog?.body);

  return (
    <BlogTemplate toc={<Toc toc={createToc(body)} />} writer={<ProfileBox />}>
      <BlogBody bodyHtml={body} tags={parseTags(blog?.tags)} />
    </BlogTemplate>
  );
};

export default BlogPage;

export const query = graphql`
  query BlogId($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      blogId
      title
      body
      image {
        url
      }
      tags {
        tagName
      }
    }
  }
`;
