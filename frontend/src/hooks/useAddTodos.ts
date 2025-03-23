import { useQueryClient, useMutation } from "@tanstack/react-query";

type TodoFormData = {
  title: string;
  description: string;
};

const AddTodos = async (data: TodoFormData) => {
  
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/todo/addTodo`,
    {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem('token')}`
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to add todo");
  }

  return response.json();
};

const useAddTodos = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: AddTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });
};

export default useAddTodos;
