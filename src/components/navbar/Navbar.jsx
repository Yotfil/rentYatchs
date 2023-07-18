import { NavLink } from 'react-router-dom'
import style from './navbar.module.scss'
import { useState } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import logo from '../../assets/logo_white.svg'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [witdth, height] = useWindowSize()

  const handleMenu = () => {
    if (witdth < 600) {
      setActive(prev => !prev)
    }
  }

  return (
    <header className={`${style.container} ${active ? style.active : ''}`}>
      <nav className={style.nav}>
        <div
          className={style.hamburguer}
          onClick={handleMenu}>
          <div className={style.hamburguerItem}></div>
          <div className={style.hamburguerItem}></div>
          <div className={style.hamburguerItem}></div>
        </div>
        <ul className={style.ul}>
          <li className={style.li}>
            <NavLink
              onClick={handleMenu}
              className={style.link}
              to='/'>
              Home
            </NavLink>
          </li>
          <li className={style.li}>
            <NavLink
              onClick={handleMenu}
              className={style.link}
              to='yatchs'>
              Yatchs
            </NavLink>
          </li>
          <li className={style.li}>
            <NavLink
              onClick={handleMenu}
              className={style.link}
              to='jetskies'>
              Jetskies
            </NavLink>
          </li>
          <li className={style.li}>
            <NavLink
              onClick={handleMenu}
              className={style.link}
              to='transportation'>
              Transportation
            </NavLink>
          </li>
          <li className={style.li}>
            <NavLink
              onClick={handleMenu}
              className={style.link}
              to='about-us'>
              About us
            </NavLink>
          </li>
        </ul>
        <figure>
          <img
            src={logo}
            alt='logo'
            className={style.logo}
          />
        </figure>
        <button className={style.contact}>Contact</button>
      </nav>
    </header>
  )
}

export default Navbar
