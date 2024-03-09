import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="p-4 bg-blue-500">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-2xl font-bold text-white">sahl.</div>
        <div className="space-x-4">
          {/* Navigation Links */}
          <Link to="/sign" className="text-white">
            Signature
          </Link>
          <Link to="/link-download" className="text-white">
            Link To File
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
