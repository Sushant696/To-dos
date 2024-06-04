import { useMutation, useQueryClient } from "@tanstack/react-query";

type FormDataType = {
  username: string;
  password: string;
};

async function postUserDetails(formData: FormDataType) {
  const response = await fetch(
    "https://taskly-55pj.onrender.com/api/user/login",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    }
  );
  console.log(response, "response");
  return response.json();
}

export function useLoginUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postUserDetails,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}
