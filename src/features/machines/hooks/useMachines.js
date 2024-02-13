import { useQuery } from "@tanstack/react-query";
import { getMachines } from "../../../services/getMachines";

export function useMachines() {
    const { isLoading, data } = useQuery({
        queryFn: getMachines,
        queryKey: ["machines"],
    });

    const machines = data?.data;

    return { isLoading, machines };
}
