import { fetchAllProjects } from "@/db/fetchProjects";
import { type Projects } from "@prisma/client";
import ProjectCard from "@/components/ProjectCard";
import NavBar from "@/components/NavBar";
import "./projects.css";

export default async function Projects() {
    const projects = await fetchAllProjects();

    return (
        // <div id="projects" style={{ display: "flex", flexDirection: "row" }}>
        <div id="projects">
            <NavBar
                options={{ location: "/projects", color: "", background: "" }}
            />
            <div id="projects_body">
                <p className="agraham">Projects</p>
                <div className="projects_board">
                    {projects?.map((x) => (
                        <ProjectCard project={x} />
                    ))}
                </div>
            </div>
        </div>
    );
}
