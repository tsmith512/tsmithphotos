import style from '../styles/footer.module.scss';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={style.container}>
      <div className={style.footerContent}>
        &copy; {year} by{' '}
        <a href="https://tsmith.com/?utm_source=tsmithphotos&utm_medium=website&utm_campaign=tsmithphotos">
          Taylor Smith
        </a>
        .
      </div>
      <div className={style.socialIcons}>
        <a href="https://instagram.com/tsmith512">
          <img
            src={require('../public/gfx/instagram.svg')}
            aria-label="Follow me on Instagram"
          />
        </a>
        <a href="https://www.linkedin.com/in/tsmith512">
          <img
            src={require('../public/gfx/linkedin.svg')}
            aria-label="My profile on LinkedIn"
          />
        </a>
        <a href="https://github.com/tsmith512">
          <img src={require('../public/gfx/github.svg')} aria-label="My work on GitHub" />
        </a>
      </div>
    </footer>
  );
};
