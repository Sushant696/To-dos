import { useState } from "react";
import { useForm } from "react-hook-form";
import AuthO from "./loginWith";
// import LoginForm from "./LoginForm";

type FormData = {
  username: string;
  email: string;
  password: string;
  rePassword: string;
};

function CreateAccount() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageColor, setMessageColor] = useState<string>("red")



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

  async function onSubmit(data: FormData) {
    setLoading(true)
    try {
      const response = await fetch("http://localhost:5500/api/user/register", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)
      })

      const res = await response.json();
      setMessage(res.message)

      if (response.status >= 200 && response.status < 300) {
        setMessageColor("green");
      } else {
        setMessageColor("red")
      }
      // Reset the form fields
      form.reset();
    }
    catch (error) {
      console.error("User not registered!")
    }
    finally {
      setLoading(false) // After the form submission is complete
    }
  }

  return (
    <div className="container flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <AuthO />
        <div className="w-4/5">
          {message && <h1 style={{ color: messageColor }} className={`subtitle-text text-center`}>{message}</h1>}
          {loading ? <h1>Please wait while submitting the form</h1> :

            <div className="container p-12">
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
                    htmlFor="email"
                  >
                    Email*
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your Email"
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
                  <p className="text-[#FF0000] text-[12px] mt-1">
                    {errors.email?.message}
                  </p>
                </div>
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
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-lg font-bold mb-2"
                    htmlFor="rePassword"
                  >
                    Re-Type Password*
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="rePassword"
                    type="password"
                    placeholder="Re-Enter your password"
                    {...register("rePassword", {
                      required: "Please re-type password",
                      validate: (value) =>
                        value === form.getValues().password ||
                        "The passwords do not match",
                    })}
                  />
                  <p className="text-[#FF0000] text-[12px] mt-1">
                    {errors.rePassword && errors.rePassword.message}
                  </p>
                </div>
                {/* Submit button */}
                <div className="flex flex-col items-center justify-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>}
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;