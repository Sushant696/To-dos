import { useForm } from "react-hook-form";
import LoginForm from "./LoginForm";
import { useState } from "react";

type FormData = {
  username: string;
  email: string;
  password: string;
  rePassword: string;
};

function CreateAccount() {
  const [registeredUser, setRegisterUser] = useState(false);

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

  function onSubmit(data: FormData) {
    const { username, email, password } = data;
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if the username already exists
    const userExists = storedUsers.some(
      (user: { username: string }) => user.username === username
    );

    if (userExists) {
      // Alert the user that the username already exists
      alert(
        "Username already exists. Please try again with a different username."
      );
    } else {
      // If the username doesn't exist, save the credentials to local storage
      const newUser = { username, email, password };
      storedUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(storedUsers));
      setRegisterUser(true);
    }

    // Reset the form fields
    form.reset();
  }

  return (
    <div className="w-[100%] h-screen flex justify-center items-center">
      <div className="w-full flex items-start justify-center">
        {!registeredUser && (
          <div className="w-[80%] p-12">
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
          </div>
        )}
        {registeredUser && <LoginForm />}
      </div>
    </div>
  );
}

export default CreateAccount;
