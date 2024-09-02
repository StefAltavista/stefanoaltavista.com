"use client";
import { useEffect, useRef, useState } from "react";
import NavBar from "@/components/NavBar";
import "./services.css";
import services_data from "../services_data";
import ServiceTab from "@/components/ServiceTab";
import { useSearchParams } from "next/navigation";

export default function Services() {
    const selected = useSearchParams();

    const [toggleInfo, setToggleInfo] = useState<number>(
        Number(selected.get("s")) ?? 0
    );

    const srv_tab = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
    ];

    useEffect(() => {
        if (toggleInfo == 0) {
            window.scrollTo(0, 0);
        } else if (srv_tab[toggleInfo].current) {
            setTimeout(() => {
                srv_tab[toggleInfo].current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 1000);
        }
    }, [toggleInfo]);
    return (
        <div id="servives_page">
            <NavBar
                options={{ location: "services", background: "", color: "" }}
            />
            <div className="vertical_division">
                <aside>
                    <h1 className="agraham"> Services</h1>
                    <p>
                        Whether you're seeking expert guidance, personalized
                        solutions, or professional support, discover how we can
                        help you achieve your goals.
                    </p>
                </aside>

                <div className="services_page_tab">
                    {services_data.map((x, idx) => (
                        <div ref={srv_tab[idx + 1]}>
                            <ServiceTab
                                service={x}
                                idx={idx}
                                open={toggleInfo == idx + 1 ? true : false}
                                toggle={setToggleInfo}
                                width={toggleInfo == idx + 1 ? "90%" : "90%"}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
