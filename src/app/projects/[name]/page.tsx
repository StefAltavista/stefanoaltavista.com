import { fetchSingleProject } from "@/db/fetchProjects";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import "./project.css";

type projectPageParams = {
    params: { name: string };
};

export default async function Project({ params }: projectPageParams) {
    const { name } = params;
    const project = await fetchSingleProject(name);
    if (!project) redirect("/404");

    const newline = (x: string) =>
        x.split("\n").map((str, i) => <p key={i}>{str}</p>);

    return (
        <>
            <div id="project">
                <NavBar
                    options={{
                        location: `/${name}`,
                        color: project.color,
                        background: project.background,
                    }}
                />
                <div
                    id="projBody"
                    style={
                        project.name == "wrongimage"
                            ? { color: project.color }
                            : { color: project.background }
                    }
                >
                    <div className="project_details">
                        <div>
                            <Image
                                src={project.logo}
                                alt={project.title}
                                width={300}
                                height={300}
                            />
                        </div>
                        <div>
                            <div id="pTitle">{project.title}</div>
                            <div id="pSub">{project.subtitle}</div>
                            <div className="margin">
                                {newline(project.technologies)}
                            </div>

                            <div id="links">
                                {project.name != "mobileapps" && (
                                    <a
                                        href={project.url}
                                        id="pLinkTo"
                                        target="_blank"
                                    >
                                        Visit Website
                                    </a>
                                )}

                                <a
                                    href={project.gitHub}
                                    id="pLinkTo"
                                    target="_blank"
                                >
                                    Visit GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                    <div id="pInfo">
                        <div id="dev">{newline(project.functionality)}</div>{" "}
                        <div id="pDescription">
                            {newline(project.description)}
                        </div>
                    </div>

                    <div id="pImages">
                        {project.images.map((x, i) => (
                            <img src={x} key={i} id="pImg" />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
