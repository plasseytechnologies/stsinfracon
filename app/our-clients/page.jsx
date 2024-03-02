'use client'
import React, { useEffect } from "react";
import Clients from "../../constant/Clients.json";
import Header from "@/components/header/Header";
import { AllScriptLoad } from "@/constant/scriptFiles";

const Clientspage = () => {
    useEffect(() => {
        AllScriptLoad();
    }, []);

    return (
        <div>
            <Header />
            <section className="section pt-20 sm:pt-10 bg-gray-100 text-md-left pb-10" >
                <div className="">
                    <div className="col-md-12 col-lg-12 col-xl-12 mb-5">
                        <div className="offset-left-xl-70 flex justify-center">
                            <h3 className="oh-desktop">
                                <span className="d-inline-block wow slideInLeft">
                                    Our clients
                                </span>
                            </h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 container">
                        {Clients.map((item) => (
                            <div key={item} className="flex justify-center items-center bg-white">
                                <a class="clients-classic-figure p-3" href="#">
                                    <img
                                        src={item?.logo}
                                        alt={item.name}
                                        style={{
                                            maxWidth: "580px",
                                            aspectRatio: "3/2",
                                            objectFit: "contain",
                                            // mixBlendMode: "color-burn",
                                        }}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Clientspage;
