import MachineList from "../features/machines/MachineList";
import Group from "../ui/components/Group";
import Heading from "../ui/components/Heading";
import Modal from "../ui/components/Modal";
import Button from "../ui/components/Button";
import CreateMachineForm from "../features/machines/CreateMachineForm";
import MachineListSearch from "../features/machines/MachineListSearch";

function Machines() {
    return (
        <>
            <Group type="horizontal">
                <Heading>Taobin Machines</Heading>
                <MachineListSearch />
            </Group>
            <Group>
                <MachineList />
                <div>
                    <Modal>
                        <Modal.Opener modalName="new-machine">
                            <Button>Register New Machine</Button>
                        </Modal.Opener>
                        <Modal.Window name="new-machine">
                            <CreateMachineForm />
                        </Modal.Window>
                    </Modal>
                </div>
            </Group>
        </>
    );
}

export default Machines;
