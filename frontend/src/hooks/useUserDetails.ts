import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";



const updateUserProfile = async (data: FormData) => {
  console.log(data);

  const response = await axios.patch(
    `${import.meta.env.VITE_BACKEND_URL}/user/updateUserProfile`,
    
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
    `${import.meta.env.VITE_BACKEND_URL}/user/getUserDetails`,

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
  });

  return { mutation, data, isPending, error };
}
