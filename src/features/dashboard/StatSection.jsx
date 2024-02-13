import {
    FaSackDollar,
    FaGlassWater,
    FaTicket,
    FaRegFaceSmile,
} from "react-icons/fa6";
import StatCard from "./StatCard";
import { formatCurrency, formatCommas } from "../../utils/numberHelper";

function StatSection({ summaries }) {
    const computedSummaries = summaries.reduce(
        (acc, current) => {
            acc.totalSales += current.totalSales;
            acc.totalItemsSold += current.totalItemsSold;
            acc.issuesRaised += current.issuesRaised;
            acc.issuesClosed += current.issuesClosed;
            return acc;
        },
        { totalSales: 0, totalItemsSold: 0, issuesRaised: 0, issuesClosed: 0 }
    );

    return (
        <>
            <StatCard
                title="Total Sales"
                color="blue"
                icon={<FaSackDollar />}
                value={formatCurrency(computedSummaries.totalSales)}
            />
            <StatCard
                title="Total Items Sold"
                color="yellow"
                icon={<FaGlassWater />}
                value={formatCommas(computedSummaries.totalItemsSold)}
            />
            <StatCard
                title="Tickets Raised"
                color="red"
                icon={<FaTicket />}
                value={formatCommas(computedSummaries.issuesRaised)}
            />
            <StatCard
                title="Tickets Closed"
                color="green"
                icon={<FaRegFaceSmile />}
                value={formatCommas(computedSummaries.issuesClosed)}
            />
        </>
    );
}

export default StatSection;
