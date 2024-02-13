import { useEffect, useState } from "react";
import { getMachines } from "../services/getMachines";

function Machines() {
    const [isLoading, setIsLoading] = useState(false);
    const [machines, setMachines] = useState([]);

    useEffect(() => {
        async function fetchMachines() {
            setIsLoading(true);
            try {
                const { data } = await getMachines();
                setMachines(data);
            } catch (err) {
                console.log(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchMachines();
    }, []);

    if (isLoading) return <div>Loading data ...</div>;
    return <div>Total machines: {machines.length}</div>;
}

export default Machines;
