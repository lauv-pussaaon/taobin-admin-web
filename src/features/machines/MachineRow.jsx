import { formatDateString, formatTimeString } from "../../utils/datetimeHelper";
import styled from "styled-components";
import Table from "../../ui/components/Table";
import Modal from "../../ui/components/Modal";
import ConfirmDelete from "../../ui/components/ConfirmDelete";
import { useDeleteMachine } from "./hooks/useDeleteMachine";
import { FaRegTrashCan } from "react-icons/fa6";
import Button from "../../ui/components/Button";

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
    const { isDeleting, deleteMachine } = useDeleteMachine();

    return (
        <Table.Row role="row">
            <BasedColumn>{name}</BasedColumn>
            <BasedColumn>
                {formatTimeString(openTime)} - {formatTimeString(closeTime)}
            </BasedColumn>
            <BasedColumn>{status}</BasedColumn>
            <BasedColumn>{formatDateString(lastCheckupDate)}</BasedColumn>
            <BasedColumn>
                {lowStockItems} / {outStockItems}
            </BasedColumn>
            <BasedColumn>
                <Modal>
                    <Modal.Opener modalName="delete-machine">
                        <Button variation="icon">
                            <FaRegTrashCan />
                        </Button>
                    </Modal.Opener>
                    <Modal.Window name="delete-machine">
                        <ConfirmDelete
                            resourceName={`machine: ${name}`}
                            onConfirm={() => deleteMachine(id)}
                            disabled={isDeleting}
                        />
                    </Modal.Window>
                </Modal>
            </BasedColumn>
        </Table.Row>
    );
}

export default MachineRow;
