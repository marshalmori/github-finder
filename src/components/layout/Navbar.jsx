import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <nav class="navbar bg-primary text-primary-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <Link to="/">
            <FaGithub className="inline pr-2 text-3xl" size={40} />
          </Link>

          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;