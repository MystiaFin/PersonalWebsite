import { Link } from "react-scroll";
import { useState } from "react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const navItems = [
        { to: "home", text: "Home" },
        { to: "about", text: "About Me" },
        { to: "projects", text: "Projects" },
        { to: "contact", text: "Contact" },
    ];
    return (
      <>
        <nav className="sticky hidden md:block backdrop-blur border-slate-950 border-1">
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
        {/* Mobile Navigation */}
        <div className="md:hidden">
                {/* Toggle Button */}
                <button
                  className="fixed top-4 left-4 z-50 p-2 backdrop-blur-md border-1 rounded-md shadow-lg focus:outline-none hover:bg-gray-100 transition-colors duration-300"
                  onClick={toggleSidebar}
                >
                  <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className={`bg-slate-900 w-5 h-0.5 rounded-full transition-all duration-300 ease-in-out ${isSidebarOpen ? "rotate-45 translate-y-0.5" : "mb-1.5"}`}></span>
                    <span className={`bg-slate-900 w-5 h-0.5 rounded-full transition-all duration-300 ease-in-out ${isSidebarOpen ? "-rotate-45" : ""}`}></span>
                  </div>
                </button>

                {/* Sidebar */}
                <nav className={`fixed top-0 left-0 h-full w-64 bg-opacity-80 bg-white backdrop-blur-md border-1  transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-40`}>
                    <div className="flex flex-col p-4 pt-20">
                        <ul className="gap-24">
                            {navItems.map((item) => (
                                <li key={item.to} className="mb-4">
                                    <Link
                                        to={item.to}
                                        smooth={true}
                                        duration={400}
                                        href={`#${item.to}`}
                                        onClick={toggleSidebar}
                                        className="text-black hover:text-slate-600"
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                {/* Overlay */}
                <div
                    className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${isSidebarOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'} z-30`}
                    onClick={toggleSidebar}
                ></div>
            </div>
      </>
    );
  }
  