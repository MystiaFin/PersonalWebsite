import { Link } from "react-scroll";

export default function Navbar() {;
    return (
      <nav className="backdrop-blur border-slate-950 border-1">
        <ul className="flex flex-row gap-14 justify-center p-4 text-gray-700">
          <li className="group">
            <Link to="home" smooth={true} duration={400} href="#home"  className="flex items-center transition duration-150 ease-in-out text-black group-hover:text-white">
              <span className="relative px-2 py-1 overflow-hidden">
                <span className="relative z-10">Home</span>
                <span className="absolute inset-x-0 bottom-0 h-0 bg-slate-900 transition-all duration-300 ease-in-out group-hover:h-full"></span>
              </span>
            </Link>
          </li>
          <li className="group">
            <Link to="about" smooth={true} duration={400} href="#about" className="flex items-center transition duration-300 ease-in-out text-black group-hover:text-white">
              <span className="relative px-2 py-1 overflow-hidden">
                <span className="relative z-10">About Me</span>
                <span className="absolute inset-x-0 bottom-0 h-0 bg-slate-900 transition-all duration-300 ease-in-out group-hover:h-full"></span>
              </span>
            </Link>
          </li>
          <li className="group">
            <Link to="projects" smooth={true} duration={400} href="#projects" className="flex items-center transition duration-300 ease-in-out text-black group-hover:text-white">
              <span className="relative px-2 py-1 overflow-hidden">
                <span className="relative z-10">Projects</span>
                <span className="absolute inset-x-0 bottom-0 h-0 bg-slate-900 transition-all duration-300 ease-in-out group-hover:h-full"></span>
              </span>
            </Link>
          </li>
          <li className="group">
            <Link to="contact" smooth={true} duration={400} href="#contact" className="flex items-center transition duration-300 ease-in-out text-black group-hover:text-white">
              <span className="relative px-2 py-1 overflow-hidden">
                <span className="relative z-10">Contact</span>
                <span className="absolute inset-x-0 bottom-0 h-0 bg-slate-900 transition-all duration-300 ease-in-out group-hover:h-full"></span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  