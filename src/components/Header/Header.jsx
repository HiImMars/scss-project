import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <header className="header">
      {/* Burger menu */}
      <button className="menu-btn" type="button">
        <RxHamburgerMenu className="menu-btn-icon" width="24" height="24" />
        Overview
      </button>
      <label className="search-field">
        <IoIosSearch className="search-icon" width="20" height="20" />
        <input
          type="search"
          className="search-input"
          name="user_search"
          placeholder="Search something..."
        />
      </label>
      <button className="message-btn">
        <IoMdNotificationsOutline
          className="message-icon"
          width="20"
          height="20"
        />
      </button>
    </header>
  );
};

export default Header;
