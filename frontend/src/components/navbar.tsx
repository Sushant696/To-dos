import { Button, Divider } from "antd";
import { NavLink } from "react-router-dom";
import img from "/images/logo.svg";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-opacity-60 backdrop-filter backdrop-blur-lg bg-white py-2">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <NavLink className="flex items-center space-x-4" to={"/"}>
            <img src={img} alt="Logo" className="w-56 h-16" />
          </NavLink>

          <div className="flex items-center space-x-8">
            <NavLink className="text-[#03256c] font-medium" to={"/features"}>
              Features
            </NavLink>
            <NavLink className="text-[#03256c] font-medium" to={"/pricing"}>
              Pricing
            </NavLink>
            <Divider type="vertical" className="bg-black h-8" />
            <div className="flex items-center space-x-6">
              <NavLink className="text-[#03256c] font-medium" to={"/login"}>
                Login
              </NavLink>
              <Button
                size="large"
                type="primary"
                className="rounded-lg py-1 px-3 text-white bg-blue-500"
              >
                <NavLink
                  className="text-white  font-medium"
                  to={"/sign-up"}
                >
                  Start For Free
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
