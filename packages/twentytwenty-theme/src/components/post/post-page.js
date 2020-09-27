import { styled, connect } from "frontity";
import React, { useEffect } from "react";
import FeaturedMedia from "./featured-media";
import {
  EntryContent,
  Post as _Post,
  PostHeader,
  PostInner,
  PostTitle,
  SectionContainer,
} from "./post-item";
import PostCategories from "./post-categories";
import PostMeta from "./post-meta";
import PostTags from "./post-tags";

const PostPage = ({ data, post, Html2React }) => {
  // Load the post, but only if the data is ready.
  return (
    <PostArticle>
      <Header>
        <PostTitle
          as="h1"
          className="heading-size-1"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </Header>

      {/* If the post has an excerpt (short summary text), we render it */}
      {post.content && (
        <PostInner size="small">
          <EntryContent>
            <Html2React html={post.content.rendered} />
          </EntryContent>
        </PostInner>
      )}
    </PostArticle>
  );
};

export default PostPage;

const Header = styled(PostHeader)`
  margin: 0;
  padding-top: 4rem;
  padding-bottom: 8rem;
  
  @media (min-width: 400px) {
    padding-bottom: 6rem;
  }

  @media (min-width: 450px) {
    padding-bottom: 4rem;
  }

  @media (min-width: 500px) {
    padding-bottom: 2rem;
  }

  @media (min-width: 700px) {
    padding-top: 8rem;
  }
`;

const PostArticle = styled(_Post)`
  padding-top: 0 !important;
`;

const FeaturedImage = styled(FeaturedMedia)`
  margin-top: 0 !important;
  position: relative;

  > div {
    position: relative;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    bottom: 50%;
    left: 0;
    right: 0;
    top: 0;
  }
`;
