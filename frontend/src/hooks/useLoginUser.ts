import { useMutation, useQueryClient } from "@tanstack/react-query";

type FormDataType = {
  username: string;
  password: string;
};

async function postUserDetails(formData: FormDataType) {
  const response = await fetch("http://localhost:5500/api/user/login", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
    credentials: "include",
  });
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
