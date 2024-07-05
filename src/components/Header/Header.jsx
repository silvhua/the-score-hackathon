import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo-white.png";
import profileIcon from "../../assets/icons/profile.svg";
import backArrow from "../../assets/icons/back.svg";
import "./Header.scss";
import { useNavigate } from "react-router-dom";


const Header = ({pageTitle}) => {
    const navigate = useNavigate();


  return (
    <header className="header">
      <Link to={"/"} className="header__logo"><img src={logo} alt={"the Score Logo"}/></Link>
    <div className="header__title">
        <img src={backArrow} alt="Back Button" onClick={() => navigate(-1)} className="header__button-back"/>
        <h1 className="header__title-text">{pageTitle}</h1>
        <Link to={"/profile"}><img src={profileIcon} alt={"Profile Icon"}/></Link>
    </div>
    </header>
  )
}

export default Header;
