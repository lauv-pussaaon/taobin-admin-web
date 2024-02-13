import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getMachines(page, searchTerm) {
    let query = supabase
        .from("machines")
        .select("*", { count: "exact" })
        .order("id", { ascending: true });

    if (page) {
        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;
        query = query.range(from, to);
    }

    if (searchTerm) {
        query = query.ilike("name", `%${searchTerm}%`);
    }

    const { data, error, count } = await query;

    if (error) {
        console.error(error);
        throw new Error("Failed to get machines from database");
    }

    return { data, count };
}

export async function createMachine(machine) {
    const { data, error } = await supabase
        .from("machines")
        .insert([{ ...machine }])
        .select()
        .single();

    if (error) {
        console.error(error);
        throw new Error("Failed to register new machine");
    }

    return { data };
}

export async function updateMachine(machine) {
    const { data, error } = await supabase
        .from("machines")
        .update({ ...machine })
        .eq("id", machine.id)
        .select()
        .single();

    if (error) {
        console.error(error);
        throw new Error("Failed to update machine");
    }

    return data;
}

export async function deleteMachine(id) {
    const { error } = await supabase.from("machines").delete().eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("Failed to delete machine");
    }
}
