import { Button, Divider, Drawer } from "antd";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";
import img from "/images/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sticky top-0 z-50 bg-white py-2 transition-all duration-300 ${scrolled ? "shadow-md bg-opacity-95" : "bg-opacity-60"} backdrop-filter backdrop-blur-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link className="flex items-center space-x-4" to={"/"}>
            <img src={img} alt="Logo" className="w-40 h-12 md:w-56 md:h-16" />
          </Link>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              icon={<MenuOutlined />}
              onClick={toggleDrawer}
              className="text-[#03256c]"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              className={({ isActive }) =>
                `text-[#03256c] font-medium relative py-2 transition-all duration-300 ${
                  isActive ? "active" : "hover:text-blue-600"
                }`
              }
              to={"/features"}
            >
              Features
            </NavLink>
            <NavLink 
              className={({ isActive }) =>
                `text-[#03256c] font-medium relative py-2 transition-all duration-300 ${
                  isActive ? "active" : "hover:text-blue-600"
                }`
              }
              to={"/pricing"}
            >
              Pricing
            </NavLink>
            <Divider type="vertical" className="bg-black h-8" />
            <div className="flex items-center space-x-6">
              <NavLink 
                className={({ isActive }) =>
                  `text-[#03256c] font-medium relative py-2 transition-all duration-300 ${
                    isActive ? "active" : "hover:text-blue-600"
                  }`
                }
                to={"/login"}
              >
                Login
              </NavLink>
              <Button
                size="large"
                type="primary"
                className="rounded-lg py-1 px-3 text-white bg-blue-500 hover:bg-blue-600 transition-all"
              >
                <Link
                  className="text-white font-medium"
                  to={"/sign-up"}
                >
                  Start For Free
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Drawer */}
      <Drawer
        placement="right"
        onClose={toggleDrawer}
        open={isOpen}
        width={250}
        bodyStyle={{ padding: 0 }}
      >
        <div className="flex flex-col p-4">
          <NavLink 
            className={({ isActive }) =>
              `text-[#03256c] font-medium py-4 border-b border-gray-100 ${
                isActive ? "text-blue-600 font-bold" : ""
              }`
            }
            to={"/features"}
            onClick={toggleDrawer}
          >
            Features
          </NavLink>
          <NavLink 
            className={({ isActive }) =>
              `text-[#03256c] font-medium py-4 border-b border-gray-100 ${
                isActive ? "text-blue-600 font-bold" : ""
              }`
            }
            to={"/pricing"}
            onClick={toggleDrawer}
          >
            Pricing
          </NavLink>
          <NavLink 
            className={({ isActive }) =>
              `text-[#03256c] font-medium py-4 border-b border-gray-100 ${
                isActive ? "text-blue-600 font-bold" : ""
              }`
            }
            to={"/login"}
            onClick={toggleDrawer}
          >
            Login
          </NavLink>
          <div className="mt-4">
            <Button
              type="primary"
              className="w-full rounded-lg py-2 text-white bg-blue-500 hover:bg-blue-600"
            >
              <NavLink
                className="text-white font-medium"
                to={"/sign-up"}
                onClick={toggleDrawer}
              >
                Start For Free
              </NavLink>
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
