import Filter from "../../ui/components/Filter";

function DashboardFilter() {
    return (
        <Filter
            param="last"
            options={[
                { value: "1", label: "Yesterday" },
                { value: "7", label: "Last 7 days" },
                { value: "30", label: "Last 30 days", default: true },
            ]}
        />
    );
}

export default DashboardFilter;
