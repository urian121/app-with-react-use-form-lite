"use client";
import { useEffect, useState } from "react";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub, FaNpm, FaLaptopCode, FaPaypal } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    const [year, setYear] = useState("");

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        setYear(currentYear);
    }, []);

    return (
        <footer className="text-light mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center mb-3">
                        <div className="d-flex justify-content-center flex-wrap icon-container">
                            <a
                                href="https://github.com/urian121"
                                target="_blank"
                                className="mx-3 fs-4 icon-hover"
                            >
                                <FaSquareGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/urian-viera"
                                target="_blank"
                                className="mx-3 fs-4 icon-hover"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://www.youtube.com/WebDeveloperUrianViera?sub_confirmation=1"
                                target="_blank"
                                className="mx-3 fs-4 icon-hover"
                            >
                                <TfiYoutube />
                            </a>
                            <a
                                href="https://www.npmjs.com/settings/urian-viera/packages"
                                target="_blank"
                                className="mx-3 fs-4 icon-hover"
                            >
                                <FaNpm />
                            </a>
                            <a href="https://www.urianviera.com" target="_blank" className="mx-3 fs-4 icon-hover">
                                <FaLaptopCode />
                            </a>
                            <a
                                href="https://www.paypal.com/donate/?hosted_button_id=4SV78MQJJH3VE"
                                target="_blank"
                                className="mx-3 fs-4 icon-hover"
                            >
                                <FaPaypal />
                            </a>
                        </div>
                    </div>
                    <div className="col-12 text-center" style={{ fontSize: "13px" }}>
                        <p className="mb-0">&copy; {year}. Urian Viera | Todos los derechos reservados.</p>
                        <p className="small">
                            Hecho con &nbsp; <FaHeart style={{ color: "red" }} /> en Bogotá, Colombia, por &nbsp;
                            <a
                                href="https://www.urianviera.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#fff" }}
                            >
                                Web Developer
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;