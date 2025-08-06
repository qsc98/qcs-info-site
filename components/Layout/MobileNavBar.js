import { FaUsers } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { Link as LinkScroll } from "react-scroll";

const MobileFloatingNav = ({ activeLink, setActiveLink }) => {
  return (
<nav className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[92vw] max-w-md bg-white">
<div className="bg-white border border-gray-200 shadow-xl rounded-full px-8 py-3 flex justify-around items-center space-x-6">
    <LinkScroll
      to="services"
      spy={true}
      smooth={true}
      duration={500}
      onSetActive={() => setActiveLink("services")}
      className={
        "flex flex-col items-center text-xs cursor-pointer " +
        (activeLink === "services" ? "text-green-500" : "text-gray-600")
      }
    >
      <div className="bg-white p-2 rounded-full shadow-md">
        <MdLocalHospital className="w-5 h-5" />
      </div>
      <span className="mt-1">Services</span>
    </LinkScroll>

<LinkScroll
  to="contact"
  spy={true}
  smooth={true}
  duration={500}
  onSetActive={() => setActiveLink("contact")}
  className={
    "flex flex-col items-center text-xs cursor-pointer " +
    (activeLink === "contact" ? "text-green-500" : "text-gray-600")
  }
>
  <div className="bg-white rounded-full shadow-md p-2">
    <HiOutlineMail className="w-5 h-5 text-black" />
  </div>
  <span className="mt-1">Contact</span>
</LinkScroll>


    <LinkScroll
      to="about"
      spy={true}
      smooth={true}
      duration={500}
      onSetActive={() => setActiveLink("about")}
      className={
        "flex flex-col items-center text-xs cursor-pointer " +
        (activeLink === "about" ? "text-green-500" : "text-gray-600")
      }
    >
      <div className="bg-white p-2 rounded-full shadow-md">
        <FaUsers className="w-5 h-5" />
      </div>
      <span className="mt-1">About</span>
    </LinkScroll>
  </div>
</nav>
  );
};

export default MobileFloatingNav;
