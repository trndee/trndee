import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_data: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "data" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_techniques: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "techniques" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_logistics: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "logistics" }
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
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>What we do</h2>
              <p>
                We extract information from data to predict trends patterns and 
                we calculate the statistical probabilities of future events to 
                shape alternative futures.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_data.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_techniques.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>How we do it</h2>
              <p>
                Our techniques include data modeling, machine learning, 
                AI, deep learning algorithms and data mining.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Where we use it</h2>
              <p>
                We use forecasting in many applications including anomaly detection, 
                capacity planning, logistics and sports.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_logistics.childImageSharp.fluid} />
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

export default About;
