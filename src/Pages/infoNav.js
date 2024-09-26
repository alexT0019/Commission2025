import "./infoNav.css";
import colors from "../Components/color";
import { useState } from "react";
import { useEffect } from "react";

export default function InfoNav() {
    //Handle scroll event
    const [currSection, setCurrSection] = useState("section1");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setCurrSection(entry.target.id);
                }
            });
        }, { threshold: 0.5 }); // Adjust threshold as needed

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    const getRectSize = (sectionId) => {
        return currSection === sectionId ? 80 : 57; // Change the width of the rect based on the current section
    };

    const handleNavClick = (sectionId) => {
        setCurrSection(sectionId);
        // Scroll to the section smoothly
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div id="infoNavContainer">
            <div>
                <a href="#section1" onClick={() => handleNavClick("section1")} style={{ color: `${colors.accent}` }}>
                    <svg width={getRectSize("section1")} height="23">
                        <rect width={getRectSize("section1")} height="23" x="0" y="0" style={{ fill: `${colors.accent}` }} />
                    </svg>
                    <span class="infoNavSpan">Commission Flow</span>
                </a>
            </div>

            <div>
                <a href="#section2" onClick={() => handleNavClick("section2")} style={{ color: `${colors.accent}` }}>
                    <svg width={getRectSize("section2")} height="23">
                        <rect width={getRectSize("section2")} height="23" x="0" y="0" style={{ fill: `${colors.accent}` }} />
                    </svg>
                    <span class="infoNavSpan">Authorization</span>
                </a>
            </div>

            <div>
                <a href="#section3" onClick={() => handleNavClick("section3")} style={{ color: `${colors.accent}` }}>
                    <svg width={getRectSize("section3")} height="23">
                        <rect width={getRectSize("section3")} height="23" x="0" y="0" style={{ fill: `${colors.accent}` }} />
                    </svg>
                    <span class="infoNavSpan">What I Draw</span>
                </a>
            </div>

            <div>
                <a href="#section4" onClick={() => handleNavClick("section4")} style={{ color: `${colors.accent}` }}>
                    <svg width={getRectSize("section4")} height="23">
                        <rect width={getRectSize("section4")} height="23" x="0" y="0" style={{ fill: `${colors.accent}` }} />
                    </svg>
                    <span class="infoNavSpan">Payment Method</span>
                </a>
            </div>
        </div>
    );
}