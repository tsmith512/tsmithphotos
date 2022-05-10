import Link from 'next/link';
import React from 'react';

import style from '../styles/nav.module.scss';

export const Nav = () => {
  return (
    <nav className={style.navContainer}>
      <ul className={style.navList}>
        <li>
          <Link passHref href="/about/">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link
            passHref
            href="https://tsmith.com/?utm_source=tsmithphotos&utm_medium=website&utm_campaign=tsmithphotos"
          >
            <a>Blog &amp; Portfolio</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
