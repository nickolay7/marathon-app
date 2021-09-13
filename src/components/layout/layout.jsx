import l from './index.module.css';

const Layout = ({ title, urlBg, colorBg, children }) => {
  return (
    <section
      className={l.root}
      style={{
        backgroundImage: `url(${urlBg})`,
        backgroundColor: `${colorBg}`
      }} >
      <div className={l.wrapper}>
        <article>
          <div className={l.title}>
            <h3>{title}</h3>
            <span className={l.separator}></span>
          </div>
          <div className={`${l.desc} ${l.full}`}>
            {children}
          </div>
        </article>
      </div>
    </section>
  );
}

export default Layout;