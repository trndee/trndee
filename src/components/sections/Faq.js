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
    title: 'Why are AI and machine learning indispensable?',
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
    title: 'Who are our customers?',
    content: () => (
      <>
        We offer a range of solutions for institutions, financial professionals 
        and individuals across the globe. From shop assistants in your local stores 
        to national organisations and charities, we have helped our customers 
        anticipate.
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
