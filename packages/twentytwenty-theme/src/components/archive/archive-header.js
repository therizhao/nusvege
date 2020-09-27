import { styled } from "frontity";
import React from "react";
import SectionContainer from "../styles/section-container";

const Header = ({ children, labelColor }) => {
  return (
    <ArchiveHeader>
      <ArchiveHeaderInner>
        <ArchiveTitle>
          {children}
        </ArchiveTitle>
      </ArchiveHeaderInner>
    </ArchiveHeader>
  );
};

export default Header;

const ArchiveHeader = styled.header`
  color: #000000;
  text-align: center;
  padding-top: 4rem;
  margin-bottom: -1rem;

  @media (min-width: 700px) {
    display: none;
    padding-top: 8rem;
    /* padding: 8rem 0; */
  }
`;

const ArchiveHeaderInner = SectionContainer;

const ArchiveTitle = styled.h1`
  font-weight: 700;
  letter-spacing: -0.026666667em;
  margin: 0;

  &, & > * {
    font-size: 2rem;
    color: #3e3732;

    @media (min-width: 700px) {
      font-size: 3.2rem;
    }
  }

`;

const ColoredText = styled.span`
  color: ${(props) => props.color};
  text-transform: capitalize;
`;
