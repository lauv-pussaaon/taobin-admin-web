import { useQuery } from "@tanstack/react-query";
import { getDailySummary } from "../../../services/apiDailySummary";

export function useDailySummaries() {
    const { data: summaries, isLoading } = useQuery({
        queryFn: getDailySummary,
        queryKey: ["daily-summaries"],
    });

    return { summaries, isLoading };
}
