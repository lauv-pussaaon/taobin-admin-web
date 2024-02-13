import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateMachine as updateMachineAPI } from "../../../services/apiMachines";
import { toast } from "react-hot-toast";

export function useUpdateMachine() {
    const queryClient = useQueryClient();

    const { mutate: updateMachine, isLoading: isUpdating } = useMutation({
        mutationFn: updateMachineAPI,
        onSuccess: () => {
            toast.success("Successfully update the machine");
            queryClient.invalidateQueries({
                queryKey: ["machines"],
            });
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });
    return { updateMachine, isUpdating };
}
