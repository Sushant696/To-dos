import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="mb-[5rem]">
      <ul className="flex justify-center gap-[12rem] mt-6">
        <li>
          <NavLink 
            className=" text-[24px] text-[#03256c] font-md"
            to={"/personal"}
          >
            Personal
          </NavLink>
        </li>
        <li>
          <NavLink className="text-[24px] text-[#03256c] font-md" to={"/work"}>
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            className=" text-[24px] text-[#03256c] font-md"
            to={"/completed"}
          >
            Completed
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
