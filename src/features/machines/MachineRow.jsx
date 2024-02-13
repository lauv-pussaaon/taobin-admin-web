import styled from "styled-components";
import Table from "../../ui/components/Table";

const BasedColumn = styled.div`
    font-size: 1.6rem;
    color: var(--color-grey-600);
`;

function MachineRow({
    machine: {
        id,
        name,
        openTime,
        closeTime,
        status,
        lastCheckupDate,
        lowStockItems,
        outStockItems,
    },
}) {
    return (
        <Table.Row role="row">
            <BasedColumn>{name}</BasedColumn>
            <BasedColumn>
                {openTime} - {closeTime}
            </BasedColumn>
            <BasedColumn>{status}</BasedColumn>
            <BasedColumn>{lastCheckupDate}</BasedColumn>
            <BasedColumn>
                {lowStockItems} / {outStockItems}
            </BasedColumn>
            <BasedColumn></BasedColumn>
        </Table.Row>
    );
}

export default MachineRow;
