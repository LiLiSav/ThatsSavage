import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";

interface NavItemProps {
  closeMobileMenu: () => void;
  item: {
    name: string;
    link: string;
  };
}

export const NavItem = ({ closeMobileMenu, item }: NavItemProps) => {
  const isActive = useLocation().pathname === item.link;
  return (
    <li>
      <Link
        to={item.link}
        className={isActive ? styles.navLinksActive : styles.navLinks}
        onClick={closeMobileMenu}
      >
        {item.name}
      </Link>
    </li>
  );
};
