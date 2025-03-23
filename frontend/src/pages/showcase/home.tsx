import { Button } from "@/components/ui/button";
import Navbar from "../../components/navbar";

import homeImg from "/images/homeimg.png";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mt-8 mx-auto">
        <div className="text-center my-4">
          <h1 className="text-6xl font-semibold text-[#172554] headingShowcase">
            Smart way to stay
            <br />
            organized
          </h1>
          <p className="my-4 text-md opacity-70">
            {" "}
            Streamline tasks with integrated calendar and notes
            <br /> for ultimate productivity.
          </p>

          <Button
            size="lg"
            className="mt-2"
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Get Started
          </Button>
        </div>
        <img
          src={homeImg}
          alt="myimg"
          className="my-12 drop-shadow-sm rounded-lg shadow-2xl "
        />
      </div>
    </div>
  );
}

export default Main;
