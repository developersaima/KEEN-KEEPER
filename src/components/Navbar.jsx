
import { ChartLine, Clock, House } from "lucide-react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const { pathname } = useLocation();

  const links = [
    { id: 1, name: "Home", icon: House, to: "/" },
    { id: 2, name: "Timeline", icon: Clock, to: "/timeline" },
    { id: 3, name: "Stats", icon: ChartLine, to: "/stats" },
  ];

  return (
    <div className="navbar bg-white border-b border-base-300 fixed top-0 left-0 right-0 z-50 px-4 md:px-8">
      <div className="navbar-start">
        <Link to="/" className="text-[#1f2937] font-bold text-2xl">
          Keen<span className="text-[#244d3f]">Keeper</span>
        </Link>
      </div>

      <div className="navbar-end md:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {links.map((i) => (
              <li key={i.id}>
                <Link
                  to={i.to}
                  className={`flex items-center gap-2 ${
                    pathname === i.to
                      ? "bg-[#244d3f] text-white"
                      : "text-[#64748b]"
                  }`}
                >
                  <i.icon size={18} />
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="navbar-end hidden md:flex">
        <ul className="flex items-center justify-end gap-4">
          {links.map((i) => (
            <li key={i.id}>
              <Link
                to={i.to}
                className={`justify-center flex items-center gap-2 px-4 py-2 rounded-md text-base font-medium ${
                  pathname === i.to
                    ? "bg-[#244d3f] text-white"
                    : "bg-transparent text-[#64748b]"
                } hover:bg-[#244d3f] hover:text-white transition-colors duration-150`}
              >
                <i.icon size={18} />
                {i.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar; 

