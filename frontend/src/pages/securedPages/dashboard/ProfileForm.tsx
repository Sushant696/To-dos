import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePostUserDetails } from "@/hooks/useUserDetails";
import { User } from "iconsax-react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type ProfileFormInputs = {
  fullName: string;
  nickName: string;
  avatar: FileList;
  role: string;
};

const ProfileForm = () => {
  const [profileComplete, setProfileComplete] = useState(false);
  const [showProfileForm, setShowProfileForm] = useState(false);

  const { mutation, data, isPending } = usePostUserDetails();
  // console.log(data.data, "incomming data  ");

  const { register, handleSubmit } = useForm<ProfileFormInputs>();

  const onSubmit: SubmitHandler<ProfileFormInputs> = (formdata) => {
    console.log(formdata, "formdata ");
    const formData = new FormData();
    formData.append("fullName", formdata.fullName);
    formData.append("nickName", formdata.nickName);
    formData.append("avatar", formdata.avatar[0]);
    formData.append("role", formdata.role);
    console.log(formdata);

    mutation.mutate(formdata);
  };

  function handleShowForm() {
    setShowProfileForm(true);
  }
  function handleHideForm() {
    setShowProfileForm(false);
  }

  if (isPending) {
    return <div>loading </div>;
  }

  if (mutation.isError) {
    return <div>error</div>;
  }

  if (data.data.ProfileComplete) {
    setProfileComplete(true);
  }

  return (
    <div className="container p-10 border max-w-xl   bg-white rounded-lg shadow-md p mt-10">
      {data && (
        <div className="flex items-center gap-4 text-blue-800 m-4">
          <div className="border rounded-full">
            <User size={90} className="p-3" color="#2243B0" variant="Bulk" />
          </div>
          <div>
            <h1>{data.data.username}</h1>
            <h1>{data.data.email}</h1>
            <h1>{data.data.nickName}</h1>
            <h1>{data.data.role}</h1>
            <h1>{data.data.fullName}</h1>
          </div>
        </div>
      )}

      {/* <h2 className="text-2xl font-bold my-6 text-center">Profile Form</h2> */}
      {!profileComplete && (
        <div className="m-8 text-right">
          {!showProfileForm ? (
            <Button onClick={handleShowForm}>Update Profile</Button>
          ) : (
            <Button onClick={handleHideForm}>cancel</Button>
          )}
        </div>
      )}
      {!profileComplete && showProfileForm && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 m-8">
          <div className="mb-4">
            <Label htmlFor="fullName" className="block text-gray-700 mb-2">
              Full Name
            </Label>
            <Input
              id="fullName"
              {...register("fullName")}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="nickName" className="block text-gray-700 mb-2">
              Nickname
            </Label>
            <Input
              id="nickName"
              {...register("nickName")}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="avatar" className="block text-gray-700 mb-2">
              Profile Picture
            </Label>
            <Input
              id="avatar"
              type="file"
              {...register("avatar")}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="role" className="block text-gray-700 mb-2">
              Role
            </Label>
            <Input
              id="role"
              {...register("role")}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <Button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
          >
            Complete Profile
          </Button>
        </form>
      )}
    </div>
  );
};

export default ProfileForm;
