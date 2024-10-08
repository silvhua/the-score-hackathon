import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo-white.png";
import profileIcon from "../../assets/icons/profile.svg";
import backArrow from "../../assets/icons/back.svg";
import "./Header.scss";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ pageTitle, className = "" }) => {
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;

  const handleBackButton = () => {
    if (currentPath !== "/") {
      navigate(-1);
    }
  };

  return (
    <header className={`header ${className}`}>
      <Link to={"/"} className="header__logo">
        <img src={logo} alt={"the Score Logo"} />
      </Link>
      <div className="header__title">
        <img
          src={backArrow}
          alt="Back Button"
          onClick={handleBackButton}
          className="header__button-back"
        />
        <h1 className="header__title-text">{pageTitle}</h1>
        <Link to={"/profile"}>
          <img src={profileIcon} alt={"Profile Icon"} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
