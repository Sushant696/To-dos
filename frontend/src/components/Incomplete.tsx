import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaTools } from "react-icons/fa";

const IncompletePopUp = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Card className="w-[500px] bg-white p-6 rounded-lg shadow-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center mb-2">
            <FaTools className="text-blue-500 text-3xl mr-2" />
            <CardTitle>Project Under Development</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-lg mb-4">
            We're currently working hard to bring you new features and improvements. Stay tuned for updates!
          </p>
          <p className="text-gray-500">
            Your experience is our priority. Please check back soon for exciting enhancements.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
            Close
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default IncompletePopUp;
