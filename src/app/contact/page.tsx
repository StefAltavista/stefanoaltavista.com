import ContactForm from "@/components/ContactForm";
import NavBar from "@/components/NavBar";
import "./contact.css";

export default function Contact() {
    return (
        <div id="contact">
            <NavBar
                options={{
                    location: "/contact",
                    color: "rgb(141, 202, 255)",
                    background: "rgb(0, 0, 0,0)",
                }}
            />
            <div id="contact_body">
                <div id="contact_text">
                    <p className="small_courier">
                        Whether you're looking to collaborate on an exciting
                        project, need assistance with a web development task, or
                        want to explore new opportunities,
                    </p>
                    <br></br>
                    <p className="agraham">I would love to hear from you. </p>
                    <br></br>
                    <p>
                        As a freelance web developer with a passion for tackling
                        new challenges, I'm always open to discussing how I can
                        help bring your ideas to life. <br></br>
                        <br></br>Feel free to reach out for any inquiries,
                        service requests, or potential job opportunities.{" "}
                    </p>
                    <p className="agraham">Let's create!</p>
                </div>
                <div className="contact_form">
                    <h1 className="agraham">Contact</h1>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
