import { useQuery } from "@tanstack/react-query";
import { getMachines } from "../../services/getMachines";

function MachineList() {
    const { isLoading, data } = useQuery({
        queryFn: getMachines,
        queryKey: ["machines"],
    });

    if (isLoading) return <div>Loading data ...</div>;

    return <div>Total machines: {data.data.length}</div>;
}

export default MachineList;
