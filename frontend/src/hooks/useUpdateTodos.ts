import { useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";

type updateTodoType = {
  id:string,
  title: string;
  description: string;
};

async function updateTodo(data: updateTodoType) {
  const response = await axios.patch(
    `${import.meta.env.VITE_BACKEND_URL}/todo/editTodo`,

    // "https://taskly-55pj.onrender.com/api/todo/editTodo",
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
