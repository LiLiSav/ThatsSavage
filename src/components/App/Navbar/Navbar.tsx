import { useState } from "react";
import { Link } from "react-router-dom";
import { CloseIcon, MenuIcon } from "components/Icons";
import styles from "./Navbar.module.scss";
import { NavItem } from "./NavItem";

const navArray = [
  { name: "Home", link: "/" },
  { name: "Prints", link: "/prints" },
  { name: "About", link: "/about-us" },
  { name: "Contact Us", link: "/contact-us" },
];

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className={styles.navbarTop}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarLogo} rel="logo" onClick={closeMobileMenu}>
          <img src="/logo-head.png" alt="Website Logo" />
        </Link>
        <div
          className={styles.menuIcon}
          onClick={handleClick}
          onKeyDown={handleClick}
          role="button"
          tabIndex={0}
        >
          {click ? <CloseIcon /> : <MenuIcon />}
        </div>
        <ul className={click ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
          {navArray.map((navItem) => {
            return <NavItem key={navItem.name} closeMobileMenu={closeMobileMenu} item={navItem} />;
          })}
        </ul>
      </div>
    </nav>
  );
};
