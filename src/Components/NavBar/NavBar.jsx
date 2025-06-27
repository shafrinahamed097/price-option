import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog/:id", name: "Blog Details" },
  ];

  return (
    <nav className="text-black bg-amber-200 p-6">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? <MdOutlineClose /> : <RiMenu2Line />}
      </div>

      <ul className={`md:flex duration-1000 absolute ${open ? 'top-16': '-top-60'} bg-yellow-200 px-6  md:static`}>
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
