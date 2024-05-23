import { Facebook, Google } from "iconsax-react";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <>
      <div className="m-2 w-full h-screen flex items-center">
        <div className="m-2 container flex justify-center items-center gap-8  ">
          <div className="flex flex-col gap-[2rem]">
            <h1 className="title-text">
              Welcome to Sushant's To-Dos Tracking Web Application.
            </h1>
            {/* Social login buttons */}
            <div className="flex gap-12">
              <div className="border p-4 flex">
                <Google
                  size="32"
                  color="#4285F4"
                  className="mr-4"
                  variant="Bulk"
                />
                <button>Continue with Google</button>
              </div>
              <div className="border p-4 flex">
                <Facebook
                  className="mr-4"
                  size="32"
                  color="#1877F2"
                  variant="Bulk"
                />
                <button>Continue with Facebook</button>
              </div>
            </div>
          </div>
        <LoginForm />
        </div>
      </div>
    </>
  );
}

export default Login;