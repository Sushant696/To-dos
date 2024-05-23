/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Divider } from "antd";
import { useForm } from "react-hook-form";
import CreateAccount from "./CreateAccount";
import { DevTool } from "@hookform/devtools";
// import { useNavigate } from "react-router-dom";

type FormData = {
  username: string;
  password: string;
};

function LoginForm() {
  // const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [userexist, setNewUser] = useState(true);
  // const navigate = useNavigate();

  const form = useForm<FormData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;

  function accountCreation() {
    console.log("create a new account");
    setNewUser(false);
  }

  function onSubmit(data: FormData) {
    console.log(data)

    // Reset the form fields
    form.reset();
  }

  return (
    <div className="w-2/3">
      <div className="">
        {userexist && (
          <div className="container">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              {/* Username field */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="username"
                >
                  Username*
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  {...register("username", {
                    required: {
                      value: true,
                      message: "Username cannot be empty!",
                    },
                  })}
                />
                <p className="mt-1 text-[#FF0000] text-[12px]">
                  {errors.username?.message}
                </p>
              </div>
              {/* Password field */}
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="password"
                >
                  Password*
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password cannot be empty!",
                    },
                  })}
                />
                <p className="text-[#FF0000] text-[12px] mt-1">
                  {errors.password?.message}
                </p>
              </div>
              {/* Submit button */}
              <div className="flex flex-col items-center justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
                {/* Or divider */}
                <Divider style={{ color: "#111", border: "#666 0.5px " }}>
                  Or
                </Divider>
                {/* Create account button */}
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button" // Changed to 'button' to prevent form submission
                  onClick={accountCreation}
                >
                  Sign Up
                </button>
              </div>
            </form>
            <DevTool control={control} />
          </div>
        )}
        {!userexist && <CreateAccount />}
      </div>
    </div>
  );
}

export default LoginForm;
