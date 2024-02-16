/* eslint-disable react/prop-types */
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = ({ isOpenBurger, setIsOpenBurger, isLarge }) => {
  return (
    <header className="header">
      {/* Burger menu */}
      {!isLarge && !isOpenBurger && (
        <button
          className="menu-btn"
          type="button"
          onClick={() => setIsOpenBurger(true)}
        >
          <RxHamburgerMenu className="menu-btn-icon" />
          Overview
        </button>
      )}

      <label className="search-field">
        <IoIosSearch className="search-icon" />
        <input
          type="search"
          className="search-input"
          name="user_search"
          placeholder="Search something..."
        />
      </label>
      <button className="message-btn">
        <IoMdNotificationsOutline className="message-icon" />
      </button>
    </header>
  );
};

export default Header;
