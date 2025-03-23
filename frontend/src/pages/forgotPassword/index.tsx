import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Mail, AlertTriangle, Loader } from "lucide-react";

type Inputs = {
  email: string;
};

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    navigate("option");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-blue-50 rounded-lg shadow-md border border-blue-200 mt-10">
      <h1 className="text-2xl font-bold mb-4 text-blue-800 text-center">
        Forgot Password
      </h1>

      <div className="bg-blue-100 p-4 rounded-md mb-6 border-l-4 border-blue-500">
        <p className="text-blue-700">
          Enter your email address to reset your password.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email" className="block mb-2 font-medium text-blue-600">
          Email Address
        </label>

        <div className="">
          <input
            id="email"
            type="email"
            className="w-full p-3 border border-blue-300 rounded-md mb-2  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="your@email.com"
            {...register("email", {
              required: {
                value: true,
                message: "Email cannot be empty!",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
        </div>

        {errors.email && (
          <div className="flex items-center mt-2 text-red-600 text-sm">
            <AlertTriangle className="h-4 w-4 mr-1" />
            <p>{errors.email.message}</p>
          </div>
        )}

        <button
          type="submit"
          className="w-full mt-6 px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <Loader className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" />
              Processing...
            </span>
          ) : (
            "Reset Password"
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <a href="/login" className="text-blue-600 hover:text-blue-800 text-sm">
          Remember your password? Sign in
        </a>
      </div>

      <div className="mt-4 text-xs text-blue-500 text-center">
        Need help? Contact our support team.
      </div>
    </div>
  );
}

export default ForgotPassword;
