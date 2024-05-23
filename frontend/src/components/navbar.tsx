// import { LogoutCurve } from "iconsax-react";
import { Button, Divider } from "antd";
import { NavLink } from "react-router-dom";


function Navbar() {

  return (
    <div className="mb-[5rem]">
      <ul className="flex justify-between container gap-[8rem] mt-6">

        <li>
          <NavLink
            className="subtitle-text font-md"
            to={"/"}
          >
            Logo
          </NavLink>
        </li>

        <div className="flex gap-8 items-center">
          <li>
            <NavLink className="text-[24px] text-[#03256c] font-md" to={"/features"}>
              Features
            </NavLink>
          </li>
          <li>
            <NavLink className="text-[24px] text-[#03256c] font-md" to={"/pricing"}>
              Pricing
            </NavLink>
          </li>
          <Divider type="vertical" className="bg-black h-8" />
          <div className="flex gap-6">
            <li>
              <NavLink
                className="text-[24px] text-[#03256c] font-md"
                to={"/login"}
              >
                Login
              </NavLink>
            </li>
            <Button size="large" type="primary" className="rounded-lg py-1 px-3 text-white bg-blue-500 ">
              <NavLink
                className="text-white medium-text font-bold font-md "
                to={"/sign-up"}
              >
                Start For Free
              </NavLink>
            </Button>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
