import { useMachines } from "./hooks/useMachines";
import Spinner from "../../ui/components/Spinner";
import Table from "../../ui/components/Table";
import MachineRow from "./MachineRow";
import Pagination from "../../ui/components/Pagination";

function MachineList() {
    const { isLoading, machines, total } = useMachines();

    if (isLoading) return <Spinner />;

    return (
        <Table columnsWidth="2fr 1.2fr 1fr 1.6fr 1fr 3.2rem">
            <Table.Header>
                <div>Name</div>
                <div>Operation Hours</div>
                <div>Status</div>
                <div>Last Checkup</div>
                <div>Low / Out Of Stock Items</div>
                <div></div>
            </Table.Header>

            <Table.Body
                data={machines}
                render={(machine) => (
                    <MachineRow key={machine.id} machine={machine} />
                )}
            />

            <Table.Footer>
                <Pagination total_rows={total} />
            </Table.Footer>
        </Table>
    );
}

export default MachineList;
