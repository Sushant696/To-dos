import { useQuery } from "@tanstack/react-query";

async function userAuthStatus() {
  const response = await fetch("https://taskly-55pj.onrender.com/api/user/verifyuser", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });
  const result = await response.json();
  return result;
}

export function useAuthStatus() {
  return useQuery({
    queryKey: ["user"],
    queryFn: userAuthStatus,
  });
}
