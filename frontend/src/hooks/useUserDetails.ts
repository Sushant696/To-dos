import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";

// Define the types
// type ProfileFormInputs = {
//   fullName: string;
//   nickName: string;
//   avatar: FileList;
//   role: string;
// };

const updateUserProfile = async (data: FormData) => {
  console.log(data);

  const response = await axios.patch(
    "https://taskly-55pj.onrender.com/api/user/updateUserProfile",
    data,
    { withCredentials: true }
  );

  if (!response.statusText) {
    throw new Error("Network response was not ok");
  }
  return response;
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
    mutationFn: updateUserProfile,
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
