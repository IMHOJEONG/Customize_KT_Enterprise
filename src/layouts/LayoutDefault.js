import React from 'react';
import Header1 from '../components/layout/Header1';
import Footer from '../components/layout/Footer';

const LayoutDefault = ({ children }) => (
  <>
    <Header1 navPosition="right" className="reveal-from-bottom" />
    {/* <main className="site-content">
      {children}
    </main> */}
    <Footer />
  </>
);

export default LayoutDefault;  