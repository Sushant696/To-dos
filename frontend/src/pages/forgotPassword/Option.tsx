import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

function Option() {
  const [resetOption, setResetOption] = useState<string>("OTP");

  function handleSelectOption(value: any) {
    console.log(value);
    setResetOption(value);
  }

  return (
    <div className="my-10 flex flex-col items-center p-6 mx-auto max-w-md bg-blue-50 rounded-lg shadow-md border border-blue-200">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Password Reset</h2>

      <div className="w-full mb-6">
        <p className="text-sm font-medium text-blue-600 mb-2">
          Choose Reset Option:
        </p>
        <Select value={resetOption} onValueChange={handleSelectOption}>
          <SelectTrigger className="w-full border-blue-300 bg-white">
            <SelectValue placeholder="Reset Option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="OTP">Via OTP</SelectItem>
            <SelectItem value="ResetLink">Via Reset Link</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full bg-blue-100 p-4 rounded-md border border-blue-200">
        {resetOption === "OTP" ? (
          <div className="flex flex-col space-y-4">
            <p className="text-sm text-blue-700">
              We'll send a one-time code to your registered email address.
            </p>
            <div className="flex justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
                Send OTP
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col space-y-4">
            <p className="text-sm text-blue-700">
              We'll email you a secure link to reset your password.
            </p>
            <div className="flex justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
                Generate Password Reset Link
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 text-xs text-blue-500 text-center">
        Need help? Contact our support team.
      </div>
    </div>
  );
}

export default Option;
