import type { Projects } from "@prisma/client";
import Image from "next/image";

import "./projectsPreview.css";

export default function ProjectsPreview({
    projects,
}: {
    projects: Projects[];
}) {
    if (!projects) {
        return <p>Error fetching data</p>;
    }
    const latestProj = [projects[0], projects[1], projects[2]];
    const creativeProj = [
        projects[projects.findIndex((x) => x.name == "ultraviolet")],
        projects[projects.findIndex((x) => x.name == "wrongimage")],
        projects[projects.findIndex((x) => x.name == "animate")],
    ];
    return (
        <div id="home_projects">
            <p className="agraham home_project_section">Latest works</p>
            <div>
                {latestProj.map((x, idx) => (
                    <div key={idx}>
                        <p>{x.title}</p>
                        <div>
                            <Image
                                src={x.logo}
                                width={500}
                                height={500}
                                alt={x.title + " logo"}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <p className="agraham home_project_section">Creative Ventures</p>
            <div>
                {creativeProj.map((x, idx) => (
                    <div key={idx}>
                        <p>{x.title}</p>
                        <div>
                            <Image
                                src={x.logo}
                                width={200}
                                height={200}
                                alt={x.title + " logo"}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
