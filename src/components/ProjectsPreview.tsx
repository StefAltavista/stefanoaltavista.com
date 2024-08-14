import type { Projects } from "@prisma/client";
import Image from "next/image";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

export default function ProjectsPreview({
    projects,
}: {
    projects: Projects[];
}) {
    console.log("component", projects);
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
            <p className="agraham">Latest works</p>
            <div>
                {latestProj.map((x, idx) => (
                    <div key={idx}>
                        <p>{x.title}</p>
                        <div>
                            <Image
                                src={x.logo}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <p className="agraham">Creative Ventures</p>
            <div>
                {creativeProj.map((x, idx) => (
                    <div key={idx}>
                        <p>{x.title}</p>
                        <div>
                            <img src={x.logo} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
