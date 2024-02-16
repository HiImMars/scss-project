/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { PiLinuxLogo } from "react-icons/pi";
import { HiOutlineViewGrid } from "react-icons/hi";
import { RiContactsFill } from "react-icons/ri";
import { FaBriefcase } from "react-icons/fa6";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";

const Sidebar = ({ setIsOpenBurger, isLarge }) => {
  return (
    <aside className="sidebar is-open" id="sidebar-menu">
      <nav className="menu">
        {!isLarge && (
          <button
            className="menu-btn"
            type="button"
            onClick={() => setIsOpenBurger(false)}
          >
            <IoCloseOutline className="menu-btn-icon" />
          </button>
        )}

        <Link to="/" className="logo">
          <PiLinuxLogo className="logo-icon" />
          GhostCRM
        </Link>
        <ul className="menu-list">
          <li className="menu-item">
            <Link className="menu-link current">
              <HiOutlineViewGrid className="menu-icon" />
              Overview
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link">
              <RiContactsFill className="menu-icon" />
              Contacts
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link">
              <FaBriefcase className="menu-icon" />
              Companies
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link">
              <MdOutlineLocalPostOffice className="menu-icon" />
              Messages
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link">
              <TbReportAnalytics className="menu-icon" />
              Report
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
