"use client";
import { useState } from "react";
import "./contactForm.css";
import { sendMessage } from "@/actions/sendMessage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ContactForm() {
    const [object, setObject] = useState("");
    const [content, setContent] = useState("");
    const [email, setEmail] = useState("");
    const [check, setCheck] = useState(false);
    const [error, setError] = useState("");
    const [response, setResponse] = useState("");
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const send = async () => {
        setCheck(true);
        setError("");
        if (!email || !content || !object) {
            setError("Please complete the form");
            return;
        }
        setSending(true);

        setTimeout(() => {}, 1000);
        const result = await sendMessage(email, object, content);
        setResponse(result);
        setSending(false);
        setSent(true);
    };

    useGSAP(() => {
        sending
            ? gsap.to(".loadingWheel", {
                  rotation: "360",
                  duration: 3,
                  ease: "none",
                  repeat: -1,
              })
            : null;
    }, [sending]);

    return (
        <div id="contactForm">
            <form>
                {!sent && !sending && (
                    <div>
                        <div className="field">
                            <p></p>
                            <input
                                type="text"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className={check && !email ? "missing" : ""}
                            ></input>
                        </div>
                        <div className="field">
                            <input
                                type="text"
                                name="Object"
                                value={object}
                                onChange={(e) => setObject(e.target.value)}
                                placeholder="Enter the object"
                                className={check && !object ? "missing" : ""}
                            ></input>
                        </div>
                        <div className="field">
                            <textarea
                                name="message"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Enter your message"
                                className={
                                    check && content == "" ? "missing" : ""
                                }
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
                        {error && <p className="error">{error}</p>}
                    </div>
                )}
                {sending && (
                    <div className="sending">
                        <div className="loadingWheel"></div>
                        <p>Sending</p>
                    </div>
                )}
                {sent && response && <p>{response}</p>}
            </form>
        </div>
    );
}
