import { fetchSingleProject } from "@/db/fetchProjects";
import { redirect } from "next/navigation";
import Link from "next/link";
import NavBar from "@/components/NavBar";

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
                    <a href={project.url} target="blank">
                        <p id="pTitle">{project.title}</p>
                    </a>
                    <p id="pSub">{project.subtitle}</p>
                    <div id="pInfo">
                        <a href={project.url} target="blank">
                            <img src={project.logo} id="pTop" />
                        </a>
                        <div id="pDescription">
                            {newline(project.description)}
                        </div>
                        <div id="tech">{newline(project.technologies)}</div>
                        <div id="dev">
                            {newline(project.functionality)}
                        </div>{" "}
                    </div>
                    <div id="links">
                        {project.name != "about" &&
                        project.name != "mobileapps" ? (
                            <a href={project.url} id="pLinkTo" target="_blank">
                                Visit Website
                            </a>
                        ) : null}
                        {project.name == "about" && (
                            <Link href="/contact">Request CV</Link>
                        )}
                        <a href={project.gitHub} id="pLinkTo" target="_blank">
                            Visit GitHub
                        </a>
                    </div>

                    <div id="pImages">
                        {project.images.map((x, i) =>
                            i == 0 ? null : <img src={x} key={i} id="pImg" />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
