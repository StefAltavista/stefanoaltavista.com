import { prisma } from "./client";
export default async function fetchProjects() {
    let projects;
    try {
        // Fetch all users
        projects = await prisma.projects.findMany();

        // Log the retrieved users
        console.log("projects:", projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
    } finally {
        // Disconnect Prisma Client
        await prisma.$disconnect();
    }

    return projects;
}
