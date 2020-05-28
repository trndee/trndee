import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import InternalLink from '@common/InternalLink';
import ExternalLink from '@common/ExternalLink';

const Contact = () => (
  <StaticQuery
    query={graphql`
      query {
        art_lighthouse: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "lighthouse" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="contact">
        <Container>
          <Grid inverse>
            <div>
              <h2>We are located in Estonia, between 
              <StyledExternalLink href="https://www.playtech.com/">Playtech</StyledExternalLink> 
              and 
              <StyledExternalLink href="https://www.skype.com/">Skype</StyledExternalLink>:</h2>
              <p>
                trnd.ee OÜ<br />
                Katleri 19-38<br />
                13915 Tallinn<br />
                Estonia<br /><br />
              <p>
                <StyledExternalLink href="#">
                  Click here to contact us &nbsp;&#x2794;
                </StyledExternalLink>
              </p>
              </p>
            </div>
            <Art>
              <Img fluid={data.art_lighthouse.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Contact;
