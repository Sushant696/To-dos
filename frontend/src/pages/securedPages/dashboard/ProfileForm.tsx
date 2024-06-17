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

  const { register, handleSubmit, reset } = useForm<ProfileFormInputs>();

  const onSubmit: SubmitHandler<ProfileFormInputs> = (formdata) => {
    const formData = new FormData();
    formData.append("fullName", formdata.fullName);
    formData.append("nickName", formdata.nickName);
    formData.append("avatar", formdata.avatar[0]);
    formData.append("role", formdata.role);

    mutation.mutate(formData, {
      onSuccess: () => {
        reset();
        setShowProfileForm(false);
      },
    });
  };
 
  function handleShowForm() {
    setShowProfileForm(true);
  }
  function handleHideForm() {
    setShowProfileForm(false);
  }

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (data.data.ProfileComplete) {
    setProfileComplete(true);

  }

  return (
    <div className="container p-10 border max-w-xl bg-white rounded-lg shadow-md mt-10">
      {data && (
        <div className="flex items-center gap-4 text-blue-800 m-4">
          <div className="border rounded-full">
            <User size={90} className="p-3" color="#2243B0" variant="Bulk" />
          </div>
          <div>
            <h1> UserName:{data.data.username}</h1>
            <h1>Email:{data.data.email}</h1>
            <h1> Nickname: {data.data.nickName}</h1>
            <h1> Role: {data.data.role}</h1>
            <h1>FullName:{data.data.fullName}</h1>
          </div>
        </div>
      )}

      {!profileComplete && (
        <div className="m-8 text-right">
          {!showProfileForm ? (
            <Button onClick={handleShowForm}>Update Profile</Button>
          ) : (
            <Button onClick={handleHideForm}>Cancel</Button>
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
              defaultValue={data.data.fullName}
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
              defaultValue={data.data.nickName}
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
              defaultValue={data.data.role}
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
