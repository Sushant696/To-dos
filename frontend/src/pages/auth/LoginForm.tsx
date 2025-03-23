import { Divider } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";

import Navbar from "@/components/navbar";
import { useLoginUser } from "@/hooks/useLoginUser";

type FormData = {
  usernameOrEmail: string;
  password: string;
};

function Login() {
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const form = useForm<FormData>({
    defaultValues: {
      password: "",
      usernameOrEmail: "",
    },
  });
  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;

  const { mutate, isPending } = useLoginUser();

  const onSubmit = (formData: FormData) => {
    mutate(formData, {
      onSuccess: (data) => {
        if (data.success) {
          navigate("/home");
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-full max-w-md">
          {message && (
            <div
              className={`mb-6 p-4 rounded-lg text-center font-medium ${message.includes("successful") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
            >
              {message}
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white">Welcome back</h2>
              <p className="text-blue-100 mt-2">Sign in to your account</p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="px-8 pt-6 pb-8"
            >
              {/* Username field */}
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="username"
                >
                  Username / Email*
                </label>
                <div className="relative">
                  <input
                    className={`w-full px-4 py-3 rounded-lg border ${errors.usernameOrEmail ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                    id="username"
                    type="text"
                    placeholder="Enter your username or email"
                    {...register("usernameOrEmail", {
                      required: {
                        value: true,
                        message: "Username cannot be empty!",
                      },
                    })}
                  />
                </div>
                {errors.usernameOrEmail && (
                  <p className="mt-2 text-red-600 text-sm">
                    {errors.usernameOrEmail.message}
                  </p>
                )}
              </div>

              {/* Password field */}
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="password"
                >
                  Password*
                </label>
                <div className="relative">
                  <input
                    className={`w-full px-4 py-3 rounded-lg border ${errors.password ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
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
                </div>
                {errors.password && (
                  <p className="mt-2 text-red-600 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Forgot password link */}
              <div className="flex justify-end mb-6">
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-800 transition duration-200"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit button */}
              <div className="mb-6">
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 shadow-md"
                  type="submit"
                  disabled={isPending}
                >
                  {isPending ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Signing In...
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </div>

              {/* Or divider */}
              <Divider className="my-6">
                <span className="text-gray-500">Or</span>
              </Divider>

              {/* Create account button */}
              <div className="text-center">
                <p className="text-gray-600 mb-4">Don't have an account?</p>
                <Link to="/sign-up">
                  <button
                    className="w-full bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
                    type="button"
                  >
                    Create Account
                  </button>
                </Link>
              </div>
            </form>
          </div>
          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
}

export default Login;
