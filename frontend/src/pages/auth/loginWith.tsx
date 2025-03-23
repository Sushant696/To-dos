import { Facebook, Google } from "iconsax-react";

function AuthO() {
  return (
    <>
      <div className=" w-full mt-12 mb-8 flex items-center">
        <div className="container flex justify-center items-center gap-8">
          <div className="flex flex-col gap-[2rem]">
            <h1 className="title-text">
              Welcome to To-Dos Tracking Web Application.
            </h1>
            {/* Social login buttons */}
            <div className="flex justify-center gap-12">
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
        </div>
      </div>
    </>
  );
}

export default AuthO;
