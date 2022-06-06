import navStyles from "../../styles/structure/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={navStyles.navbarContainer}>
      <div className={navStyles.desktopContainer}>
        <img className={navStyles.logo} src="muno.png" />
        <Link href="/">
          <a className={navStyles.link}>Munozovepi Gwata</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
