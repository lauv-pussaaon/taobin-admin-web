import supabase from "./supabase";
import { getYesterday } from "../utils/datetimeHelper";

export async function getDailySummary() {
    const { data, error } = await supabase
        .from("dailySummary")
        .select("*")
        .lte("processedDate", getYesterday())
        .order("processedDate", { ascending: false });

    if (error) {
        console.error(error);
        throw new Error("Failed to fetch daily summary");
    }

    return data;
}
