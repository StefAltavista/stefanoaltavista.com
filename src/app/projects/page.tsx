import { fetchAllProjects } from "@/db/fetchProjects";
import { type Projects } from "@prisma/client";
import ProjectCard from "@/components/ProjectCard";
import NavBar from "@/components/NavBar";

export default async function Projects() {
    const projects = await fetchAllProjects();

    return (
        <div id="projects">
            <NavBar
                options={{ location: "/projects", color: "", background: "" }}
            />
            <p className="agraham">Projects</p>
            {projects?.map((x) => (
                <ProjectCard project={x} />
            ))}
        </div>
    );
}
