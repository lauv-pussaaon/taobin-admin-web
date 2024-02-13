import DashboardLayout from "../features/dashboard/DashboardLayout";
import Group from "../ui/components/Group";
import Heading from "../ui/components/Heading";
import DashboardFilter from "../features/dashboard/DashboardFilter";

function Dashboard() {
    return (
        <>
            <Group type="horizontal">
                <Heading as="h1">Dashboard</Heading>
                <DashboardFilter />
            </Group>

            <DashboardLayout />
        </>
    );
}

export default Dashboard;
