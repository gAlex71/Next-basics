import Link from 'next/link';
import React from 'react';
import Navigation from './Navigation';

const navItems = [
  {label: 'Home', href: '/'},
  {label: 'Blog', href: '/blog'},
  {label: 'About', href: '/about'},
];

const Header = () => {
  return (
    <header>
        <Navigation navlinks={navItems}/>
    </header>
  )
}

export default Header;