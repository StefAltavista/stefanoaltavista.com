"use client";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import "./services.css";
import Image from "next/image";
import services from "./data";

export default function Services() {
    const [service, setService] = useState<number>(0);
    return (
        <div id="services">
            <NavBar
                options={{
                    location: "/contact",
                    color: "rgb(0, 0, 0)",
                    background: "rgb(255, 85, 85,0.5)",
                }}
            />
            <h1 className="agraham">Services</h1>
            <div id="services_list">
                {services.map((x, idx) => {
                    return (
                        // <div className="service">
                        <div
                            className="service_tab"
                            onClick={() => {
                                service != idx + 1
                                    ? setService(idx + 1)
                                    : setService(0);
                            }}
                        >
                            <Image
                                src={x.icon}
                                width={100}
                                height={100}
                                alt={x.title}
                            />
                            <h2>{x.title}</h2>
                            {/* </div> */}
                            <div
                                className={`service_info ${
                                    service === idx + 1 ? "open" : "close"
                                }`}
                            >
                                {" "}
                                <p>{x.description}</p>
                                <ul>
                                    {x.specific.map((x) => {
                                        return (
                                            <li>
                                                <strong>{x.name}</strong>
                                                <p>{x.details}</p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
