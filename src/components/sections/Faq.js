import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'What is forecasting?',
    content: () => (
      <>
        Forecasting is the process of making predictions of the future based on 
        past and present data and most commonly by analysis of trends.
      </>
    ),
  },
  {
    title: 'Why is machine learning so exciting?',
    content: () => (
      <>
        Machine learning is the study of computer algorithms that improve automatically 
        through experience. It is seen as a subset of artificial intelligence. Machine 
        learning algorithms build a mathematical model based on sample data, known as 
        "training data", in order to make predictions or decisions without being explicitly 
        programmed to do so
      </>
    ),
  },
  {
    title: 'What is our perspective?',
    content: () => (
      <>
        We don’t set limits based on what others think is possible or impossible. We drive 
        ourselves to push boundaries and solve problems. We continuously expand our knowledge 
        to find new answers.
      </>
    ),
  },
  {
    title: 'Can we really predict the future?',
    content: () => (
      <>
        Not quite. But what we can do is to generate alternative scenarios of the 
        future and predict outcomes including both likely and unlikely futures.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
