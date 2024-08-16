import React, { useState } from "react";
import ContactForm from "@/components/ContactForm";
import NavBar from "@/components/NavBar";
// import { useParams } from "react-router-dom";

export default function Contact() {
    return (
        <div id="contactPage" style={{ display: "flex", flexDirection: "row" }}>
            <NavBar
                options={{
                    location: "/contact",
                    color: "rgb(141, 202, 255)",
                    background: "rgb(0, 0, 0,0)",
                }}
            />
            <div id="contactBody">
                <h3 className="agraham" style={{ color: "rgb(141, 202, 255)" }}>
                    Contact S . A . M .
                </h3>
                <ContactForm />
            </div>
        </div>
    );
}
