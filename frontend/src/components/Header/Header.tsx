import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '../../assets/homepage/svg/logo.svg'
import search from '../../assets/homepage/svg/Search.svg'
function Header() {
  return (
    <header className="header">
        <div className="header-container1">
            <Link to="/" className="logo">
                <img src={logo} alt="logo" className="logo__img" />
                <p className="logo__text">crypter</p>
            </Link>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/" className="nav__link">Discover</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/" className="nav__link">How it work</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="header-wrap">
            <div className="header-search">
                <input type="text" className="header-seach__input" placeholder="Search" />
                <img src={search} alt="search" className="header-search__img" />
            </div>
            <div className="header-btns">
                <button className="header-btns__btn button">Upload</button>
                <button className="header-btns__btn2 button2">Connect Wallet</button>
            </div>
        </div>
    </header>
  )
}

export default Header