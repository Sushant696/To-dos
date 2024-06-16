import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

// Define the types
type ProfileFormInputs = {
  fullName: string;
  nickName: string;
  avatar: FileList;
  role: string;
};

const postUserDetails = async (formData: ProfileFormInputs) => {
  
  const formDataObj = new FormData();
  formDataObj.append("fullName", formData.fullName);
  formDataObj.append("nickName", formData.nickName);
  formDataObj.append("avatar", formData.avatar[0]);
  formDataObj.append("role", formData.role);

  const response = await fetch(
    "https://taskly-55pj.onrender.com/api/user/postUserDetails",
    {
      method: "patch",
      credentials: "include",
      body: formDataObj,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};

const getUserDetails = async () => {
  const response = await fetch(
    "https://taskly-55pj.onrender.com/api/user/getUserDetails",
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};

export function usePostUserDetails() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postUserDetails,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userDetails"] });
    },
  });

  const { data, isPending, error } = useQuery({
    queryKey: ["userDetails"],
    queryFn: getUserDetails,
    // enabled: !!data, // Only execute the query if data is already available
  });

  return { mutation, data, isPending, error };
}
