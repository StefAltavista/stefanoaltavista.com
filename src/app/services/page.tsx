"use client";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import "./services.css";
import services_data from "../services_data";
import ServiceTab from "@/components/ServiceTab";

export default function Services() {
    const [toggleInfo, setToggleInfo] = useState(0);
    return (
        <div id="servives_page">
            <NavBar
                options={{ location: "services", background: "", color: "" }}
            />
            <div className="vertical_division">
                <span>
                    <h1 className="agraham"> Services</h1>
                    <p>
                        i offer the following services asdfhgk kyg hadfs h
                        fkajsdgf kasdhfg kasdjgf fsdkdhg asdfkg asdfkg kkhasdfk
                        ghadsf
                    </p>
                </span>

                <div className="services_page_tab">
                    {services_data.map((x, idx) => (
                        <ServiceTab
                            service={x}
                            idx={idx}
                            open={toggleInfo == idx + 1 ? true : false}
                            toggle={setToggleInfo}
                            width={toggleInfo == idx + 1 ? "90%" : "40%"}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
