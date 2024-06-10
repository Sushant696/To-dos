import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface deleteTodoType {
  id: string | null;
}

const deleteTodos = async (id: deleteTodoType) => {
  const response = await axios.patch(
    "https://taskly-55pj.onrender.com/api/todo/deleteTodo",
    { id } 
  );
  return response.data;
};

// src/hooks/useDeleteTodo.js

export const useDeleteTodo = () => {
  const queryClient = useQueryClient(); // queryClient is used to interact with the cache

  return useMutation({
    mutationFn: deleteTodos, // function that will be called when the mutation is triggered but when will it be triggered? it is triggered when the mutate function is called

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] }); // invalidate the cache meaning that the cache will be deleted and the data will be fetched again cache is used to store the data so that the data is not fetched again and again
    },
  });
};

// export default useDeleteTodos;
