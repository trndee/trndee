import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import InternalLink from '@common/InternalLink';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_future: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "future" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_future.childImageSharp.fluid} />
            </Art>
            <Text>
              <h1>
                We make predictions of
                <br />
                the future based on
                <br />
                past and present data
              </h1>
              <br />
              <p>
                <StyledInternalLink href="#faq">
                  Read more &nbsp;&#x2794;
                </StyledInternalLink>
              </p>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledInternalLink = styled(InternalLink)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Header;
