import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <ul className="flex justify-center gap-[12rem] mt-6">
        <li>
          <Link className="text-[24px]" to={"/personal"}>Personal</Link>
        </li>
        <li>
          <Link className="text-[24px]" to={"/work"}>Work</Link>
        </li>
        <li>
          <Link className="text-[24px]" to={"/completed"}>Completed</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
