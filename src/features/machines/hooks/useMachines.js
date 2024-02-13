import { useQuery } from "@tanstack/react-query";
import { getMachines } from "../../../services/apiMachines";
import { useSearchParams } from "react-router-dom";

export function useMachines() {
    const [searchParams] = useSearchParams();

    const page = searchParams.get("page")
        ? Number(searchParams.get("page"))
        : 1;

    const { isLoading, data: { data: machines, count: total } = {} } = useQuery(
        {
            queryFn: () => getMachines(page),
            queryKey: ["machines", page],
        }
    );

    console.log(total);
    return { isLoading, machines, total };
}
