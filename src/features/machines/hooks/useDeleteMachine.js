import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMachine as deleteMachineAPI } from "../../../services/apiMachines";
import { toast } from "react-hot-toast";

export function useDeleteMachine() {
    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: deleteMachine } = useMutation({
        mutationFn: deleteMachineAPI,
        onSuccess: () => {
            toast.success("Successfully delete the machine");
            queryClient.invalidateQueries({
                queryKey: ["machines"],
            });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isDeleting, deleteMachine };
}
