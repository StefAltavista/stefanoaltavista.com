import { fetchAllProjects } from "@/db/fetchProjects";
import { type Projects } from "@prisma/client";
import ProjectCard from "@/components/ProjectCard";
import NavBar from "@/components/NavBar";
import "./projects.css";

export default async function Projects() {
    const projects = await fetchAllProjects();
    return (
        <div id="projects">
            <NavBar
                options={{ location: "/projects", color: "", background: "" }}
            />

            <div id="projects_body">
                <div className="projects_board">
                    <div className="projects_header">
                        <h3 className="agraham">Projects</h3>
                        <p>
                            Here you can find some selected projects of mine,
                            developed for companies, clients or personal
                            endevours.
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
