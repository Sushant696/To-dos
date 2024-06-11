import { useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";

type updateTodoType = {
  title: string;
  description: string;
};

async function updateTodo(data: updateTodoType) {
  const response = await axios.patch(
    "https://taskly-55pj.onrender.com/api/editTodo",
    data,
    {
      withCredentials: true,
    }
  );
  return response;
}

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
