import { LogoutCurve } from "iconsax-react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  function handleLogout(){
    navigate("/")
  }
  return (
    <div className="mb-[5rem]">
      <ul className="flex justify-center gap-[8rem] mt-6">
        <li>
          <NavLink
            className="text-[24px] text-[#03256c] font-md"
            to={"/personal"}
          >
            Personal Tasks
          </NavLink>
        </li>
        <li>
          <NavLink className="text-[24px] text-[#03256c] font-md" to={"/work"}>
            Work Tasks
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-[24px] text-[#03256c] font-md"
            to={"/completed"}
          >
            Completed Tasks
          </NavLink>
        </li>
      </ul>
      <div className=" fixed top-5 right-5 mb-[-2rem] ">
        <button onClick={handleLogout} className="flex items-center gap-3 text-[24px] text-[#111] font-md px-4 py-1 ">
          Logout
          <LogoutCurve size="32" color="#2667FF" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
