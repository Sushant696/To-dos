import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

// Define the types
type ProfileFormInputs = {
  fullName: string;
  nickName: string;
  avatar: FileList;
  skill: string;
  role: string;
};

const postUserDetails = async (formData: ProfileFormInputs) => {
  // Create a FormData object to handle file uploads
  const formDataObj = new FormData();
  formDataObj.append("fullName", formData.fullName);
  formDataObj.append("nickName", formData.nickName);
  formDataObj.append("avatar", formData.avatar[0]);
  formDataObj.append("skill", formData.skill);
  formDataObj.append("role", formData.role);

  const response = await fetch("http://localhost:5500/api/user/postUserDetails", {
    method: "POST",
    credentials: "include",
    body: formDataObj,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};

const getUserDetails = async () => {
  const response = await fetch("http://localhost:5500/api/user/getUserDetails", {
    method: "GET",
    credentials: "include",
  });

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
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  const { data, isPending, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUserDetails,
    // enabled: !!data, // Only execute the query if data is already available
  });

  return { mutation, data, isPending, error };
}
