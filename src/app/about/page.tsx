import NavBar from "@/components/NavBar";
import Image from "next/image";
import "./about.css";
import Acii_avatar from "@/components/Ascii_avatar";

export default function about() {
    return (
        <div id="about_page">
            <NavBar
                options={{
                    location: "/contact",
                    color: "rgb(0, 0, 0)",
                    background: "rgb(255, 85, 85,0.5)",
                }}
            />
            <div id="about">
                <div className="about_section">
                    <Acii_avatar control={false} />
                </div>
                <div className="about_section">
                    <div className=" agraham">
                        <h1> . S . A . M . </h1>
                    </div>
                    <div className=" about_description">
                        <p>
                            With a background in Electronics and Information
                            Technology Stefano Altavista Mascitti is a
                        </p>
                        <p className="agraham"> Full Stack Web Developer </p>
                        <p>
                            with a highly creative and innovative drive.
                            <br></br>
                            <br></br>The studies in Telecommunication Systems
                            and programming languages such as C, C++, Java and
                            PHP, the recent study of Javascript and many
                            associate libraries and frameworks, joined with his
                            artistic path as
                        </p>
                        <p className="agraham"> Musician </p>
                        <p>and </p>
                        <p className="agraham"> Digital Artist </p>
                        <p>
                            makes S.A.M by every means a complete full stack web
                            developer
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
