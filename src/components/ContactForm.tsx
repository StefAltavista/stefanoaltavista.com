"use client";
import React, { useState } from "react";
import "./contactForm.css";

export default function ContactForm() {
    const [object, setObject] = useState("");
    const [content, setContent] = useState("");
    const [email, setEmail] = useState("");
    const [response, setResponse] = useState("");
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const sendMessage = () => {
        setSending(true);
        const message =
            `<div><p>MESSAGE FROM PORTFOLIO PAGE</p>` +
            `<strong>From:</strong><br></br><p>${email}</p>` +
            `<strong>Object:</strong><p><br></br>${object}</p> ` +
            `<strong>Message:</strong><br></br><p>${content}</p> </div> `;

        fetch("stafanoaltavista.com/api/contact", {
            headers: {
                "Content-type": "application/json",
                Authorization: "FuckYouWhatAreYouEvenTryingToGet?",
            },
            method: "POST",
            body: JSON.stringify({ message }),
        })
            .then((res) => res.json())
            .then(({ response }) => {
                setResponse(response);
                setSending(false);
                setSent(true);
            })
            .catch(() => setResponse("sorry an error occured"));
    };
    return (
        <div id="contactForm">
            <form>
                {!sent && (
                    <div>
                        <div className="field">
                            <p>E-Mail address</p>
                            <input
                                type="text"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div className="field">
                            <p>Object</p>
                            <input
                                type="text"
                                name="Object"
                                value={object}
                                onChange={(e) => setObject(e.target.value)}
                            ></input>
                        </div>
                        <div className="field">
                            <p>Message</p>
                            <textarea
                                name="message"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                                sendMessage();
                            }}
                        >
                            Send
                        </button>
                    </div>
                )}
                {sent && response && <p>{response}</p>}
                {sending && (
                    <div id="sending">
                        <div className="loadingWheel"></div>
                        <p>Sending</p>
                    </div>
                )}
            </form>
        </div>
    );
}
