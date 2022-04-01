import Link from 'next/link';

import style from '../styles/header.module.scss';

export const Header = () => {

  return (
    <header className={style.container}>
      <h1 className={style.logo}>
        <Link href="/">
          <img src={require('../public/gfx/logo.svg')} aria-label="Taylor Smith" />
        </Link>
      </h1>
    </header>
  )
}
