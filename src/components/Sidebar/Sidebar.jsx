import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { PiLinuxLogo } from "react-icons/pi";
import { HiOutlineViewGrid } from "react-icons/hi";
import { RiContactsFill } from "react-icons/ri";
import { FaBriefcase } from "react-icons/fa6";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";

const Sidebar = () => {
  return (
    <aside className="sidebar" id="sidebar-menu">
      <nav className="menu">
        <button className="menu-btn" type="button">
          <IoCloseOutline className="menu-btn-icon" width="20" height="20" />
        </button>
        <Link to="/" className="logo">
          <PiLinuxLogo className="logo-icon" width="24" height="24" />
          GhostCRM
        </Link>
        <ul className="menu-list">
          <li className="menu-item">
            <Link className="menu-link current">
              <HiOutlineViewGrid className="menu-icon" width="20" height="20" />
              Overview
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link">
              <RiContactsFill className="menu-icon" width="20" height="20" />
              Contacts
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link">
              <FaBriefcase className="menu-icon" width="20" height="20" />
              Companies
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link">
              <MdOutlineLocalPostOffice
                className="menu-icon"
                width="20"
                height="20"
              />
              Messages
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link">
              <TbReportAnalytics className="menu-icon" width="20" height="20" />
              Report
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
