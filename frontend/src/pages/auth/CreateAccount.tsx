import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRegisterUser } from "@/hooks/useRegisterUser";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "@/components/navbar";

type FormData = {
  username: string;
  email: string;
  password: string;
  rePassword: string;
};

function CreateAccount() {
  const [message, setMessage] = useState<string | null>(null);
  const [messageColor, setMessageColor] = useState<string>("red");
  const navigate = useNavigate();

  const form = useForm<FormData>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      rePassword: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const { mutate: registerUser, isPending } = useRegisterUser();

  const onSubmit = (data: FormData) => {
    registerUser(data, {
      onSuccess: (res) => {
        setMessage(res.message);
        setMessageColor("green");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
        form.reset();
      },
      onError: () => {
        setMessage("Failed to register user");
        setMessageColor("red");
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="w-full max-w-lg">
          {message && (
            <div
              className={`mb-6 p-4 rounded-lg text-center font-medium ${messageColor === "green" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
            >
              {message}
            </div>
          )}

          {isPending ? (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="flex flex-col items-center justify-center">
                <svg
                  className="animate-spin h-10 w-10 text-blue-600 mb-4"
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
                <h2 className="text-xl font-medium text-gray-700">
                  Creating your account...
                </h2>
                <p className="text-gray-500 mt-2">
                  Please wait while we process your registration.
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6">
                <h2 className="text-2xl font-bold text-white">
                  Create an account
                </h2>
                <p className="text-blue-100 mt-2">
                  Join us today and get started
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="px-8 pt-6 pb-8"
              >
                {/* Username field */}
                <div className="mb-5">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <div className="relative">
                    <input
                      className={`w-full px-4 py-3 rounded-lg border ${errors.username ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                      id="username"
                      type="text"
                      placeholder="Choose a username"
                      {...register("username", {
                        required: {
                          value: true,
                          message: "Username cannot be empty!",
                        },
                      })}
                    />
                  </div>
                  {errors.username && (
                    <p className="mt-2 text-red-600 text-sm">
                      {errors.username.message}
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div className="mb-5">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email cannot be empty!",
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Please enter a valid email",
                        },
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-red-600 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password field */}
                <div className="mb-5">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className={`w-full px-4 py-3 rounded-lg border ${errors.password ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                      id="password"
                      type="password"
                      placeholder="Create a password"
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

                {/* Re-Type Password field */}
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="rePassword"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      className={`w-full px-4 py-3 rounded-lg border ${errors.rePassword ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                      id="rePassword"
                      type="password"
                      placeholder="Confirm your password"
                      {...register("rePassword", {
                        required: "Please re-type password",
                        validate: (value) =>
                          value === form.getValues().password ||
                          "The passwords do not match",
                      })}
                    />
                  </div>
                  {errors.rePassword && (
                    <p className="mt-2 text-red-600 text-sm">
                      {errors.rePassword.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="mb-6">
                  <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 shadow-md"
                    type="submit"
                    disabled={isPending}
                  >
                    Create Account
                  </button>
                </div>

                {/* Sign in link */}
                <div className="text-center">
                  <p className="text-gray-600">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-blue-600 hover:text-blue-800 font-medium transition duration-200"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
