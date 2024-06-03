import PropTypes from "prop-types";

import "./Header.css";

const Header = ({ children }) => {
  return (
    <div className="Header">
      <span className="Header__Logo">TypeScrash</span>
      {children}
    </div>
  );
};

Header.propTypes = {
    children: PropTypes.children
}

export default Header;
