import Link from 'next/link';
import React from 'react';

import style from '../styles/nav.module.scss';

export const Nav = () => {
  return (
    <nav className={style.navContainer}>
      <ul className={style.navList}>
        <li><Link passHref href="/adventures/"><a>Adventures</a></Link></li>
        <li><Link passHref href="/hobbies/"><a>Hobbies</a></Link></li>
        <li><Link passHref href="/about/"><a>About</a></Link></li>
      </ul>
    </nav>
  );
};
