import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navToggle = () => {
    active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');

    toggleIcon === 'nav__toggler'
      ? setToggleIcon('nav__toggler toggle')
      : setToggleIcon("nav__toggler")
  };



  return (

    <>
      <nav className="nav">
        <Link to="/" className='nav__brand'>My Blog</Link>
        <ul className={active}>
          <Link to="/myblog">My Blog</Link>

          <Link to="/addproduct">add Blog</Link>
          <Link to="/profile">Profile</Link>

          <div className="auth_btn">
            <button>LogOut</button>

          </div>
        </ul>

        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  )
}

export default Header