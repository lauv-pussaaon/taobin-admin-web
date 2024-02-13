import { useMachines } from "./hooks/useMachines";
import Spinner from "../../ui/components/Spinner";
import Table from "../../ui/components/Table";

function MachineList() {
    const { isLoading, machines } = useMachines();

    if (isLoading) return <Spinner />;

    return (
        <Table columnsWidth="2fr 1.2fr 1fr 1.6fr 1fr 3.2rem">
            <Table.Header>
                <div>Name</div>
                <div>Operation Hours</div>
                <div>Status</div>
                <div>Last Checkup</div>
                <div>Stock Level</div>
                <div></div>
            </Table.Header>

            <Table.Body data={machines}>
                {machines.map((machine) => (
                    <Table.Row role="row" key={machine.id}>
                        <div>{machine.name}</div>
                        <div>
                            {machine.openTime} - {machine.closeTime}
                        </div>
                        <div>{machine.status}</div>
                        <div>{machine.lastCheckupDate}</div>
                        <div>
                            {machine.lowStockItems} / {machine.outStockItems}
                        </div>
                        <div></div>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
}

export default MachineList;
