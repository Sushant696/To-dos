import { Divider } from "antd";
// import loginImg from "./assets/img1.jpeg";
import { Facebook, Google } from "iconsax-react";

function LoginForm() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full flex items-start justify-center  ">
        <div className=" flex flex-col mt-[2rem] gap-[4rem] w-1/2 px-10 py-12">
          <h1 className="text-[48px]">
            Welcome to Sushant's To-Dos Tracking Web Application.
          </h1>
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

        <div className="w-1/3 p-12">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {/* Username field */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-lg font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your username"
              />
            </div>
            {/* Password field */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-lg font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <Divider style={{ color: "#111", border: "#666 0.5px " }}>
                Or
              </Divider>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button" // Changed to 'button' to prevent form submission
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
