"use client";
import { useState } from "react";
import "./serviceTab.css";
import Image from "next/image";
import type { Service } from "@/app/services_data";

export default function Services_component({
    service,
    idx,
    open,
    toggle,
    width,
}: {
    service: Service;
    idx: number;
    open: boolean;
    toggle: (x: number) => void;
    width: string;
}) {
    return (
        <div
            className="service_tab"
            onClick={() => {
                toggle(open ? 0 : idx + 1);
            }}
            style={{ width: width }}
        >
            <div>
                <Image
                    src={service.icon}
                    width={100}
                    height={100}
                    alt={service.title}
                    className="service_icon"
                />
                <div className={open ? "expand" : "shrink"}></div>
                <h2>{service.title}</h2>
            </div>
            <div className={`service_info ${open ? "open" : "close"}`}>
                <p>{service.description}</p>
                <ul>
                    {service.specific.map((x) => {
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
}
