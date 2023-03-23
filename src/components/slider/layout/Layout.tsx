import s from './Layout.module.scss';
const Layout = () => {
  return (
    <div className={s.layout}>
        <span className={s.layoutVertical}></span>
        <span className={s.layoutHorisontal}></span>
    </div>
  )
}

export default Layout
