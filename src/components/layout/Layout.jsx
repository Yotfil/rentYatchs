import style from './layout.module.scss'

const Layout = ({ children, title }) => {
  return (
    <main className={style.layout}>
      <div className={style.titleContainer}>
        <h2 className={style.title}>{title || ''}</h2>
      </div>
      {children}
    </main>
  )
}

export default Layout
