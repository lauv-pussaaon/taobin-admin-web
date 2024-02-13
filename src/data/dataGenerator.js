import { faker } from "@faker-js/faker";
import fs from "fs";
import Papa from "papaparse";
import { DEFAULT_MACHINE_CONFIG } from "../utils/constants.js";

const TOTAL_MACHINES = 1000;
const PRODUCT_BASE_PRICE = 40;
const SUMMARY_PROCESSED_DAYS = 30;

async function mockMachines(numberOfMachines) {
    let machines = [];
    try {
        const thaiAreas = await loadThailandAreas();
        Array.from({ length: numberOfMachines }, (_, i) => {
            const id = i + 1;
            const lastDataDate = "2024-01-31T00:00:00.000Z";
            const installedDate = faker.date.between({
                from: "2023-06-01T00:00:00.000Z",
                to: lastDataDate,
            });
            const lastCheckupDate = faker.date.between({
                from: installedDate,
                to: lastDataDate,
            });
            const nextCheckupDate = faker.date.soon({ days: 21 });
            machines.push({
                id: id,
                name: `Machine ${thaiAreas.at(i)["TAMBON_E"]} (${i
                    .toString()
                    .padStart(4, "0")})`,
                status: faker.helpers.arrayElement(["active", "inactive"]),
                coldTemp: DEFAULT_MACHINE_CONFIG.coldTemp,
                hotTemp: DEFAULT_MACHINE_CONFIG.hotTemp,
                stockThreshold: DEFAULT_MACHINE_CONFIG.stockThreshold,
                openTime: `0${faker.number.int({ min: 0, max: 6 })}:00`,
                closeTime: `${faker.number.int({ min: 18, max: 23 })}:59`,
                installedDate: installedDate,
                lastCheckupDate: lastCheckupDate,
                nextCheckupDate: nextCheckupDate,
                lowStockItems: faker.number.int({ min: 0, max: 20 }),
                outStockItems: faker.number.int({ min: 0, max: 5 }),
                address: `${thaiAreas.at(i)["TAMBON_T"]} ${
                    thaiAreas.at(i)["AMPHOE_T"]
                }`,
                position: `${thaiAreas.at(i)["LAT"]},${
                    thaiAreas.at(i)["LONG"]
                }`,
                city: thaiAreas.at(i)["CHANGWAT_E"],
                country: "Thailand",
            });
        });
        return machines;
    } catch (err) {
        console.log("Failed to mock data ", err.message);
    }
}

function mockDailySummary(numberOfDays) {
    let summary = [];
    Array.from({ length: numberOfDays }, (_, i) => {
        const totalItemsSold =
            faker.number.int({ max: 30, min: 10 }) * TOTAL_MACHINES;
        const issuesRaised = faker.number.int({
            max: 0.2 * TOTAL_MACHINES,
            min: 0.1 * TOTAL_MACHINES,
        });
        summary.push({
            processedDate: faker.date
                .recent({ days: i + 1 })
                .toISOString()
                .split("T")[0],
            totalSales: totalItemsSold * PRODUCT_BASE_PRICE,
            totalItemsSold: totalItemsSold,
            lowStockMachines: faker.number.int({
                max: 0.3 * TOTAL_MACHINES,
                min: 0.1 * TOTAL_MACHINES,
            }),
            outStockMachines: faker.number.int({
                max: 0.1 * TOTAL_MACHINES,
                min: 0.01 * TOTAL_MACHINES,
            }),
            issuesRaised: issuesRaised,
            issuesClosed: faker.number.int({
                max: issuesRaised,
                min: 0.5 * issuesRaised,
            }),
        });
    });
    return summary;
}

async function mockCsvData() {
    const machines_csv = Papa.unparse(await mockMachines(TOTAL_MACHINES));
    const summary_csv = Papa.unparse(mockDailySummary(SUMMARY_PROCESSED_DAYS));
    fs.writeFile("./machines.csv", machines_csv, (error) => {
        if (error) throw error;
        console.log("Mock data generated and saved to machines.csv");
    });
    fs.writeFile("./summary.csv", summary_csv, (error) => {
        if (error) throw error;
        console.log("Mock data generated and saved to summary.csv");
    });
}

async function loadThailandAreas() {
    const thaiAreasCSV = fs.readFileSync("./tambon.csv", "utf8");

    return new Promise((resolve, reject) => {
        Papa.parse(thaiAreasCSV, {
            complete: (result) => {
                resolve(result.data);
            },
            header: true,
            error: (error) => {
                reject(error);
            },
        });
    });
}

mockCsvData();
