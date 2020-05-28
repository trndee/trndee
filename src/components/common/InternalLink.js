import React from 'react';

const InternalLink = ({ href, children, ...other }) => (
  <a href={href} {...other} rel="noreferrer noopener" target="_self">
    {children}
  </a>
);

export default InternalLink;
