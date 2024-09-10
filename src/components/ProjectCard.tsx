"use client";
import Link from "next/link";
import { type Projects as Project } from "@prisma/client";
import "./projectCard.css";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`./projects/${project.name}`}
            onClick={(e) => e.stopPropagation()}
        >
            <div
                id="projectCard"
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

                <Image
                    src={project.logo}
                    id="projLogo"
                    width={200}
                    height={200}
                    alt={`${project.name} logo`}
                />
                <p> {project.subtitle}</p>
            </div>
        </Link>
    );
}
