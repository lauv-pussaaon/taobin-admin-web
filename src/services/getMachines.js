import supabase from "./supabase";

export async function getMachines() {
    let query = supabase.from("machines").select("*", { count: "exact" });

    const { data, error, count } = await query;

    if (error) {
        console.error(error);
        throw new Error("Failed to get machines from database");
    }

    return { data, count };
}
