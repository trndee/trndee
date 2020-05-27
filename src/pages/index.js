import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Brands from '@sections/FAQ';
import Team from '@sections/Contact';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Faq />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
