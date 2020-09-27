import React from "react";
import { styled, connect } from "frontity";
import Link from "./link";
import SectionContainer from "./styles/section-container";
import { GitHubIcon, InstagramIcon } from "./icons";

// Component that provides scroll to top functionality
const BackToTop = () => {
  // scroll to top function
  const scrollToTop = (event) => {
    // prevent the default behaviors
    event.preventDefault();
    // scroll to the top smoothly
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <a href="#site-header" onClick={scrollToTop} style={{ cursor: "pointer" }}>
      <span style={{ marginRight: 8 }}>To the top</span>
      <span className="arrow" aria-hidden="true">
        ↑
      </span>
    </a>
  );
};

const Footer = ({ state }) => {
  const currentYear = new Date().getFullYear();
  const { footerBg } = state.theme.colors;

  return (
    <SiteFooter bg={footerBg} role="contentinfo">
      <SiteFooterInner>
        <Credits>
          <IconsWrapper>
            <StyledLink link={state.social.githubUrl}>
              <GitHubIcon />
            </StyledLink>
            <StyledLink link={state.social.instagramUrl}>
              <InstagramIcon />
            </StyledLink>
          </IconsWrapper>
          <Copyright>
            &copy; {currentYear}{" "}
            <Link link={state.frontity.url}>{state.frontity.title}</Link>
          </Copyright>
        </Credits>
        <BackToTop />
      </SiteFooterInner>
    </SiteFooter>
  );
};

export default connect(Footer);

const SiteFooterInner = styled(SectionContainer)`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
`;

const SiteFooter = styled.footer`
  margin-top: 5rem;
  border-color: #dcd7ca;
  border-style: solid;
  border-width: 0;
  padding: 3rem 0;
  background-color: ${(props) => props.bg};
  color: #000000;
  display: flex;
  align-items: flex-start;

  @media (min-width: 700px) {
    margin-top: 8rem;
    font-size: 1.8rem;
    padding: 4.3rem 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Credits = styled.div``;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;

  .svg-icon {
    width: 2rem;
    margin-right: 1.5rem;
  }
`;

const Copyright = styled.p`
  font-weight: 600;
  margin-top: 2rem;

  @media (min-width: 700px) {
    font-weight: 700;
  }
`;

const PoweredBy = styled.p`
  color: #6d6d6d;
  display: none;
  margin: 0 0 0 2.4rem;

  @media (min-width: 700px) {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  transition: opacity .2s;

  :hover {
    opacity: 0.7;
  }
`;