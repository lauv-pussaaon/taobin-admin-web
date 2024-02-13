import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createMachine as createMachineAPI } from "../../../services/apiMachines";

export function useCreateMachine() {
    const queryClient = useQueryClient();

    const { mutate: createMachine, isLoading: isCreating } = useMutation({
        mutationFn: createMachineAPI,
        onSuccess: () => {
            toast.success("Successfully register the new machine");
            queryClient.invalidateQueries({
                queryKey: ["machines"],
            });
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { createMachine, isCreating };
}
