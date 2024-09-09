"use server";
import prisma from "./client";
export async function fetchAllProjects() {
    let projects;
    try {
        projects = await prisma.projects.findMany({ orderBy: [{ id: "asc" }] });
    } catch (error) {
        console.error("Error fetching projects:", error);
    }
    // finally {
    //     // Disconnect Prisma Client
    //     await prisma.$disconnect();
    // }

    return projects;
}

export async function fetchSingleProject(name: string) {
    let projects;
    try {
        projects = await prisma.projects.findFirst({ where: { name } });
    } catch (error) {
        console.error("Error fetching projects:", error);
    }

    return projects;
}
