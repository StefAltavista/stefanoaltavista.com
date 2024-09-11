"use client";
import { useState } from "react";
import "./contactForm.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export type FormMessageType = {
    email: string;
    object: string;
    content: string;
};
type responseType = {
    e: string | null;
    message: string;
};

export default function ContactForm() {
    const [message, setMessage] = useState<FormMessageType>({
        email: "",
        object: "",
        content: "",
    });

    const [consent, setConsent] = useState(false);
    const [check, setCheck] = useState(false);
    const [error, setError] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async () => {
        setCheck(true);

        setError("");
        if (!message.email || !message.content || !message.object) {
            setError("Please complete the form");
            return;
        }
        if (!consent) {
            setError("Please accept the terms of use");
            return;
        }
        setSending(true);
        setTimeout(() => {}, 1000);

        const messageHTML =
            `<div><p>MESSAGE FROM STEFANOALTAVISTA.COM </p>` +
            `<strong>From:</strong><br></br><p>${message.email}</p>` +
            `<strong>Object:</strong><p><br></br>${message.object}</p> ` +
            `<strong>Message:</strong><br></br><p>${message.content}</p> </div> `;

        try {
            const res = await fetch("/api/contact/", {
                method: "post",
                body: JSON.stringify({ messageHTML }),
            });

            const response: responseType = await res.json();
            setResponseMessage(response.message);
            setSending(false);
            setSent(true);
        } catch (e) {
            setResponseMessage("error");
            setSending(false);
            setSent(true);
        }
    };
    const handleCheckbox = () => {
        setConsent(!consent);
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
                                value={message.email}
                                onChange={(e) =>
                                    setMessage({
                                        ...message,
                                        email: e.target.value,
                                    })
                                }
                                placeholder="Enter your email"
                                className={
                                    check && !message.email ? "missing" : ""
                                }
                            ></input>
                        </div>
                        <div className="field">
                            <input
                                type="text"
                                name="Object"
                                value={message.object}
                                onChange={(e) =>
                                    setMessage({
                                        ...message,
                                        object: e.target.value,
                                    })
                                }
                                placeholder="Enter the object"
                                className={
                                    check && !message.object ? "missing" : ""
                                }
                            ></input>
                        </div>
                        <div className="field">
                            <textarea
                                name="message"
                                value={message.content}
                                onChange={(e) =>
                                    setMessage({
                                        ...message,
                                        content: e.target.value,
                                    })
                                }
                                placeholder="Enter your message"
                                className={
                                    check && message.content == ""
                                        ? "missing"
                                        : ""
                                }
                            ></textarea>
                        </div>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }}
                        >
                            Send
                        </button>
                        <div
                            className={`policy_consent ${
                                check && consent != true ? "missing" : ""
                            }`}
                        >
                            <input
                                className={` ${
                                    check && consent != true ? "missing" : ""
                                }`}
                                type="checkbox"
                                name="consent"
                                checked={consent}
                                onChange={handleCheckbox}
                            ></input>
                            <p> I agree to the terms of use</p>
                        </div>
                        {error && <p className="error">{error}</p>}
                    </div>
                )}
                {sending && (
                    <div className="sending">
                        <div className="loadingWheel"></div>
                        <p>Sending</p>
                    </div>
                )}
                {sent && responseMessage == "success" && (
                    <div className="response">
                        <p className="small_courier">Message sent!</p>
                        <p>
                            Thanks for contacting me.
                            <br></br>I will get back to you as soon as possible.
                            <br></br>
                            <br></br>Stef
                        </p>
                    </div>
                )}
                {sent && responseMessage == "error" && (
                    <div className="response">
                        <p>
                            Sorry there was a problem with the server.<br></br>{" "}
                            Please try again
                        </p>
                    </div>
                )}
            </form>
        </div>
    );
}
