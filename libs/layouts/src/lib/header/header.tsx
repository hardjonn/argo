import React from 'react';

import './header.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <div>
      <h1>Welcome to header component!</h1>
    </div>
  );
};

export default Header;
