import NavBar from "@/components/NavBar";
import Image from "next/image";
import "./about.css";

export default function about() {
    return (
        <div id="about">
            <NavBar
                options={{
                    location: "/contact",
                    color: "rgb(0, 0, 0)",
                    background: "rgb(255, 85, 85,0.5)",
                }}
            />
            <Image
                src="/images/about/Logo.png"
                alt="stef web developer"
                width={200}
                height={200}
            />
            <p>
                With a background in Electronics and Information Technology
                Stefano Altavista Mascitti is a Web and App developer with a
                highly creative and innovative drive. The past studies in
                Telecommunication Systems and languages such as C, C++, Java and
                PHP, the recent study of Javascript and many associate libraries
                and frameworks, joined with his artistic path as Musician and a
                Graphic designer makes S.A.M by every means a complete full
                stack web developer
            </p>
        </div>
    );
}
