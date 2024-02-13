import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getMachines(page) {
    let query = supabase.from("machines").select("*", { count: "exact" });

    if (page) {
        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;
        query = query.range(from, to);
    }

    const { data, error, count } = await query;

    if (error) {
        console.error(error);
        throw new Error("Failed to get machines from database");
    }

    return { data, count };
}
