import { fetchAllProjects } from "@/db/fetchProjects";
import { type Projects } from "@prisma/client";
import ProjectCard from "@/components/ProjectCard";
import NavBar from "@/components/NavBar";
import "./projects.css";

export default async function Projects() {
    const projects = await fetchAllProjects();
    projects ? ([projects[2], projects[3]] = [projects[3], projects[2]]) : null;
    return (
        <div id="projects">
            <NavBar
                options={{ location: "/projects", color: "", background: "" }}
            />

            <div id="projects_body">
                <div className="projects_board">
                    <div className="projects_header">
                        <h2 className="agraham">Projects</h2>
                        <p className="small_courier">
                            Selection of projects developed for companies or
                            clients and personal endeavors
                        </p>
                    </div>

                    {projects?.map((x) => (
                        <ProjectCard project={x} />
                    ))}
                </div>
            </div>
        </div>
    );
}
