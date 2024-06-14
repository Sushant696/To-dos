import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePostUserDetails } from "@/hooks/useUserDetails";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type ProfileFormInputs = {
  fullName: string;
  nickName: string;
  avatar: FileList;

  role: string;
};

const ProfileForm: React.FC = () => {
  const { mutation, data, isPending } = usePostUserDetails();

  const { register, handleSubmit } = useForm<ProfileFormInputs>();

  const onSubmit: SubmitHandler<ProfileFormInputs> = (formdata) => {
    mutation.mutate(formdata);
  };

  if (isPending) {
    return <div>loading </div>;
  }

  return (
    <div className="container mx-auto p-4 max-w-lg bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold my-6 text-center">Profile Form</h2>
      {!data && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
      {data && (
        <div className="text-blue-800">
          <h1>{data.data.username}</h1>
          <h1>{data.data.email}</h1>
          <h1>{data.data.nickName}</h1>
          <h1>{data.data.role}</h1>
          <h1>{data.data.fullName}</h1>
        </div>
      )}
    </div>
  );
};

export default ProfileForm;
