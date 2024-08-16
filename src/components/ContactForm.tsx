"use client";
import React, { useState } from "react";
import "./contactForm.css";
import { sendMessage } from "@/actions/sendMessage";

export default function ContactForm() {
    const [object, setObject] = useState("");
    const [content, setContent] = useState("");
    const [email, setEmail] = useState("");
    const [response, setResponse] = useState("");
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const send = async () => {
        if (!email || !content || !object) {
            alert("Please fill out all the fields! :)");
            return;
        }
        setSending(true);
        const result = await sendMessage(email, object, content);
        setResponse(result);
        setSending(false);
        setSent(true);
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
                                send();
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
