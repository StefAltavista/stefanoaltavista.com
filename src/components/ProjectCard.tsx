import Link from "next/link";
import { type Projects as Project } from "@prisma/client";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Link href={`./projects/${project.name}`}>
            <div
                id="projectPreview"
                style={{
                    background: project.background
                        .replace("rgb", "rgba")
                        .replace(")", ",0.8)"),
                    color: project.color,
                }}
            >
                <div id="head">
                    <h3>{project.title}</h3>
                </div>

                <img src={project.logo} id="projLogo" />
                <p> {project.subtitle}</p>
            </div>
        </Link>
    );
}
