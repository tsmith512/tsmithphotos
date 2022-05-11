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
    </footer>
  );
};
