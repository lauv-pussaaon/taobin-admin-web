import { formatDateString, formatTimeString } from "../../utils/datetimeHelper";
import styled from "styled-components";
import Table from "../../ui/components/Table";
import Modal from "../../ui/components/Modal";
import ConfirmDelete from "../../ui/components/ConfirmDelete";
import { useDeleteMachine } from "./hooks/useDeleteMachine";
import { FaRegTrashCan, FaPen, FaGear } from "react-icons/fa6";
import Button from "../../ui/components/Button";
import Group from "../../ui/components/Group";
import EditMachineForm from "./EditMachineForm";
import EditMachineConfig from "./EditMachineConfig";

const BasedColumn = styled.div`
    font-size: 1.6rem;
    color: var(--color-grey-600);
`;

function MachineRow({ machine }) {
    const { isDeleting, deleteMachine } = useDeleteMachine();
    const {
        id,
        name,
        openTime,
        closeTime,
        status,
        lastCheckupDate,
        lowStockItems,
        outStockItems,
        uptime,
    } = machine;

    return (
        <Table.Row role="row">
            <BasedColumn>{name}</BasedColumn>
            <BasedColumn>
                {formatTimeString(openTime)} - {formatTimeString(closeTime)}
            </BasedColumn>
            <BasedColumn>{status}</BasedColumn>
            <BasedColumn>
                {formatDateString(lastCheckupDate) || "--"}
            </BasedColumn>
            <BasedColumn>
                {lowStockItems} / {outStockItems}
            </BasedColumn>
            <BasedColumn>{uptime ? uptime.toFixed(1) + "%" : "--"}</BasedColumn>
            <BasedColumn>
                <Modal>
                    <Group type="horizontal-left">
                        <Modal.Opener modalName="update-machine">
                            <Button variation="icon" size="small">
                                <FaPen />
                            </Button>
                        </Modal.Opener>
                        <Modal.Opener modalName="config-machine">
                            <Button variation="icon" size="small">
                                <FaGear />
                            </Button>
                        </Modal.Opener>
                        <Modal.Opener modalName="delete-machine">
                            <Button variation="icon" size="small">
                                <FaRegTrashCan />
                            </Button>
                        </Modal.Opener>
                    </Group>
                    <Modal.Window name="update-machine">
                        <EditMachineForm machine={machine} />
                    </Modal.Window>
                    <Modal.Window name="config-machine">
                        <EditMachineConfig machine={machine} />
                    </Modal.Window>
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
