/* eslint-disable @typescript-eslint/no-unused-vars */

import { DevTool } from "@hookform/devtools";
import { Divider } from "antd";
import { useForm } from "react-hook-form";
import AuthO from "./loginWith";
import BackToHome from "@/components/BackToHome";
import { useState } from "react";
import { useLoginUser } from "@/hooks/useLoginUser";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

type FormData = {
  username: string;
  password: string;
};

function Login() {
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const form = useForm<FormData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;

  const { mutate, isPending } = useLoginUser();

  const onSubmit = (formData: FormData) => {
    mutate(formData, {
      onSuccess: (data) => {
        if (data.success) {
          navigate("/private");
          setMessage("Login successful!");
        } else {
          setMessage(data.message);
        }
      },
      onError: () => {
        setMessage("Failed to login");
      },
    });
    form.reset();
  };

  return (
    <>
      <div className="absolute top-8 left-8">
        <BackToHome />
      </div>
      <div className="container flex justify-center items-center">
        {message && <h1>{message}</h1>}
        <div className="w-full flex flex-col justify-center items-center">
          <AuthO />
          <div className="w-3/5">
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
                  disabled={isPending}
                >
                  {isPending ? "Signing In..." : "Sign In"}
                </button>
                {/* Or divider */}
                <Divider style={{ color: "#111", border: "#666 0.5px " }}>
                  Or
                </Divider>
                {/* Create account button */}
                <Link to="/sign-up">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign Up
                  </button>
                </Link>

              </div>
            </form>
            <DevTool control={control} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
