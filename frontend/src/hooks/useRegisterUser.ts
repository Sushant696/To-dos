import { useMutation, useQueryClient } from "@tanstack/react-query";

type FormData = {
  username: string;
  email: string;
  password: string;
  rePassword: string;
};

async function registerUserApi(formData: FormData) {
  const response = await fetch(
    // "https://taskly-55pj.onrender.com/api/user/register",
    `${import.meta.env.VITE_BACKEND_URL}/user/register`,
    
    {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to register user");
  }

  return response.json();
}

export function useRegisterUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: registerUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}
