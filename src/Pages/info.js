import "./info.css";

import NavBar from "../Components/navbar";
import NavBarOpen from "../Components/navbarOpen";

import { useState } from "react";
import colors from "../Components/color";

import InfoNav from "./infoNav";

import SNS from "../Components/SNS";

import Footer from "../Components/footer";



export default function Info() {
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);

    const toggleNavBar = () => {
        setIsNavBarOpen(!isNavBarOpen)
    };

    return (
        <div>
            <NavBar toggleNavBar={toggleNavBar} />
            <NavBarOpen isVisible={isNavBarOpen} />

            <InfoNav />

            <section id="section1">
                <div id="infoSectionContainer">
                    <div>
                        <h1 class="infoH1" style={{ color: `${colors.primary}` }}>Commission Flow</h1>
                        <hr id="titleLine" style={{ backgroundColor: `${colors.accent}`, border: "none" }} />
                    </div>

                    <div id="flowContainer">
                        <div class="flowText">
                            <svg width="75" height="75">
                                <circle cx="50%" cy="50%" r="37.5" strokeWidth="4" fill={`${colors.primary}`} />
                                <text fill={`${colors.background}`} fontSize="32" x="50%" y="50%" textAnchor="middle"
                                    dominantBaseline="middle">1</text>
                            </svg>
                            <p class="flowTextTitle" style={{ color: `${colors.primary}` }}>Discuss and confirm commission details</p>
                            <p class="flowTextPara">
                                <span>Please make commissions with the following information: </span><br />
                                <span style={{ color: `${colors.accent}`, fontWeight: "bold" }}>-Type</span><br />
                                <span style={{ color: `${colors.accent}`, fontWeight: "bold" }}>-Requirements</span><br />
                                <span style={{ color: `${colors.accent}`, fontWeight: "bold" }}>-Character(s)</span><br />
                                <span>The price may be adjusted according to the</span><span style={{ color: `${colors.accent}`, fontWeight: "bold" }}> complexity.</span>
                            </p>
                        </div>

                        <div class="line" id="line1" style={{ borderTop: `6px dotted ${colors.primary}` }}></div>

                        <p class="lineInfo lineInfo1">1 week</p>

                        <div class="flowText">
                            <svg width="75" height="75">
                                <circle cx="50%" cy="50%" r="37.5" strokeWidth="4" fill={`${colors.primary}`} />
                                <text fill={`${colors.background}`} fontSize="32" x="50%" y="50%" textAnchor="middle"
                                    dominantBaseline="middle">2</text>
                            </svg>
                            <p class="flowTextTitle" style={{ color: `${colors.primary}` }}>Draft<br />
                                (can adjust twice)</p>
                            <p class="flowTextPara">
                                <span>Once the commission is confirmed, cancelling the commission would cost </span><span style={{ color: `${colors.accent}`, fontWeight: "bold" }}>25%</span><span> of full payment as the price of draft</span>
                            </p>
                        </div>

                        <div class="line" id="line2" style={{ borderTop: `6px dotted ${colors.primary}` }}></div>

                        <div class="flowText">
                            <svg width="75" height="75">
                                <circle cx="50%" cy="50%" r="37.5" strokeWidth="4" fill={`${colors.primary}`} />
                                <text fill={`${colors.background}`} fontSize="32" x="50%" y="50%" textAnchor="middle"
                                    dominantBaseline="middle">3</text>
                            </svg>
                            <p class="flowTextTitle" style={{ color: `${colors.primary}` }}>Payment</p>
                            <p class="flowTextPara">
                                <span>During the stage of draft, adjustment request can be made for free </span><span style={{ color: `${colors.accent}`, fontWeight: "bold" }}>twice</span><span>. Each would cost </span><span style={{ color: `${colors.accent}`, fontWeight: "bold" }}>10%</span><span> of the price after that.</span>
                            </p>
                        </div>

                        <div class="line" id="line3" style={{ borderTop: `6px dotted ${colors.primary}` }}></div>

                        <p class="lineInfo lineInfo2">2 weeks</p>

                        <div class="flowText">
                            <svg width="75" height="75">
                                <circle cx="50%" cy="50%" r="37.5" strokeWidth="4" fill={`${colors.primary}`} />
                                <text fill={`${colors.background}`} fontSize="32" x="50%" y="50%" textAnchor="middle"
                                    dominantBaseline="middle">4</text>
                            </svg>
                            <p class="flowTextTitle" style={{ color: `${colors.primary}` }}>Finish</p>
                            <p class="flowTextPara">
                                <span>Please make payment </span><span style={{ color: `${colors.accent}`, fontWeight: "bold" }}>within a week</span><span> after draft confirmation, and DM with the receipt.
                                    Artist would continue to finish </span><span style={{ color: `${colors.accent}`, fontWeight: "bold" }}>after receiving full payment.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="section2">
                <div id="infoSectionContainer">
                    <div>
                        <h1 class="infoH1" style={{ color: `${colors.primary}` }}>Authorization</h1>
                        <hr id="titleLine" style={{ backgroundColor: `${colors.accent}`, border: "none" }} />
                    </div>

                    <div id="authContainer">
                        <div>
                            <svg width="353" height="240">
                                <rect width="353" height="220" x="0" y="10" rx="4" ry="4" style={{ fill: "none", strokeWidth: "3", stroke: "#4D84B8" }} />
                            </svg>
                            <p class="authTitle authTitle1">Usage</p>
                            <p class="authInfo authInfo1-1" style={{ color: `${colors.text}` }}>
                                For <span style={{ color: `${colors.accent}`, fontWeight: "bold" }}>personal use</span> only.
                            </p>
                            <p class="authInfo authInfo1-2" style={{ color: `${colors.text}` }}>
                                For commercial use, please contact via <span style={{ color: `${colors.accent}`, fontWeight: "bold" }}>email</span>.
                            </p>

                        </div>
                        <div>
                            <svg width="353" height="240">
                                <rect width="353" height="220" x="0" y="10" rx="4" ry="4" style={{ fill: "none", strokeWidth: "3", stroke: "#4D84B8" }} />
                            </svg>
                            <p class="authTitle authTitle2">Copyright</p>
                            <p class="authInfo authInfo2" style={{ color: `${colors.text}` }}>
                                The artist has rights to <span style={{ color: `${colors.accent}`, fontWeight: "bold" }}>publish</span> the artwork on personal website, SNS, and  portfolio without notice, and has the <span style={{ color: `${colors.accent}`, fontWeight: "bold" }}>copyright reserved</span>.
                            </p>
                        </div>
                        <div>
                            <svg width="353" height="240">
                                <rect width="353" height="220" x="0" y="10" rx="4" ry="4" style={{ fill: "none", strokeWidth: "3", stroke: "#4D84B8" }} />
                            </svg>
                            <p class="authTitle authTitle3">Authorized</p>
                            <p class="authInfo authInfo3-1" style={{ color: `${colors.text}` }}>Clients are <span style={{ color: `${colors.accent}`, fontWeight: "bold" }}>AUTHORIZED</span> to:</p>
                            <p class="authInfo authInfo3-2" style={{ color: `${colors.text}` }}>O Personal use</p>
                            <p class="authInfo authInfo3-3" style={{ color: `${colors.text}` }}>O Zoom or crop</p>
                            <p class="authInfo authInfo3-4" style={{ color: `${colors.text}` }}>O Share watermarked version with Artist tagged</p>
                        </div>
                        <div>
                            <svg width="353" height="240">
                                <rect width="353" height="220" x="0" y="10" rx="4" ry="4" style={{ fill: "none", strokeWidth: "3", stroke: "#4D84B8" }} />
                            </svg>
                            <p class="authTitle authTitle4">Prohibited</p>
                            <p class="authInfo authInfo4-1" style={{ color: `${colors.text}` }}>Clients are <span style={{ color: `${colors.accent}`, fontWeight: "bold" }}>PROHIBITED</span> to:</p>
                            <p class="authInfo authInfo4-2" style={{ color: `${colors.text}` }}>X Commercial use</p>
                            <p class="authInfo authInfo4-3" style={{ color: `${colors.text}` }}>X Edit or reprocess</p>
                            <p class="authInfo authInfo4-4" style={{ color: `${colors.text}` }}>X Share without credit</p>
                        </div>
                    </div>

                </div>
            </section>

            <section id="section3">
                <div id="infoSectionContainer">
                    <div>
                        <h1 class="infoH1" style={{ color: `${colors.primary}` }}>What I Draw</h1>
                        <hr id="titleLine" style={{ backgroundColor: `${colors.accent}`, border: "none" }} />
                    </div>

                    <div id="drawContainer">
                        <div>
                            <svg width="353" height="240">
                                <rect width="353" height="220" x="0" y="10" rx="4" ry="4" style={{ fill: "none", strokeWidth: "3", stroke: "#4D84B8" }} />
                            </svg>
                            <p class="drawTitle drawTitle1">I will draw</p>
                            <p class="drawInfo drawInfo1-1" style={{ color: `${colors.text}` }}>1. Original characters</p>
                            <p class="drawInfo drawInfo1-2" style={{ color: `${colors.text}` }}>2. ACGN characters</p>
                            <p class="drawInfo drawInfo1-3" style={{ color: `${colors.text}` }}>3. BL/BG/GL</p>
                            <p class="drawInfo drawInfo1-4" style={{ color: `${colors.text}` }}>4. Text-only character design</p>
                        </div>
                        <div>
                            <svg width="353" height="240">
                                <rect width="353" height="220" x="0" y="10" rx="4" ry="4" style={{ fill: "none", strokeWidth: "3", stroke: "#4D84B8" }} />
                            </svg>
                            <p class="drawTitle drawTitle2">I will not draw</p>
                            <p class="drawInfo drawInfo2" style={{ color: `${colors.text}` }}>Characters created with Picrew</p>
                        </div>
                        <div>
                            <svg width="353" height="240">
                                <rect width="353" height="220" x="0" y="10" rx="4" ry="4" style={{ fill: "none", strokeWidth: "3", stroke: "#4D84B8" }} />
                            </svg>
                            <p class="drawTitle drawTitle3">Open to discuss</p>
                            <p class="drawInfo drawInfo3-1" style={{ color: `${colors.text}` }}>1. Non-human characters</p>
                            <p class="drawInfo drawInfo3-2" style={{ color: `${colors.text}` }}>2. Mature content (R18)</p>
                            <p class="drawInfo drawInfo3-3" style={{ color: `${colors.text}` }}>3. R18G</p>
                        </div>
                    </div>

                </div>
            </section>

            <section id="section4">
                <div id="infoSectionContainer">
                    <div>
                        <h1 class="infoH1" style={{ color: `${colors.primary}` }}>Payment Method</h1>
                        <hr id="titleLine" style={{ backgroundColor: `${colors.accent}`, border: "none" }} />
                    </div>

                    <div id="payContainer">
                        <div>
                            <svg width="75" height="75">
                                <circle cx="50%" cy="50%" r="37.5" strokeWidth="4" fill={`${colors.primary}`} />
                                <text fill={`${colors.background}`} fontSize="32" x="50%" y="50%" textAnchor="middle"
                                    dominantBaseline="middle">1</text>
                            </svg>
                            <svg width="365" height="85">
                                <rect width="365" height="82" x="0" y="2" rx="4" ry="4" style={{ fill: "none", strokeWidth: "3", stroke: "#4D84B8" }} />
                            </svg>
                            <p class="payTitle payTitle1">Paypal</p>
                        </div>
                        <div>
                            <svg width="75" height="75">
                                <circle cx="50%" cy="50%" r="37.5" strokeWidth="4" fill={`${colors.primary}`} />
                                <text fill={`${colors.background}`} fontSize="32" x="50%" y="50%" textAnchor="middle"
                                    dominantBaseline="middle">2</text>
                            </svg>
                            <svg width="365" height="85">
                                <rect width="365" height="82" x="0" y="2" rx="4" ry="4" style={{ fill: "none", strokeWidth: "3", stroke: "#4D84B8" }} />
                            </svg>
                            <p class="payTitle payTitle2">Bank Transaction (HK)</p>
                        </div>
                        <div>
                            <svg width="75" height="75">
                                <circle cx="50%" cy="50%" r="37.5" strokeWidth="4" fill={`${colors.primary}`} />
                                <text fill={`${colors.background}`} fontSize="32" x="50%" y="50%" textAnchor="middle"
                                    dominantBaseline="middle">3</text>
                            </svg>
                            <svg width="365" height="85">
                                <rect width="365" height="82" x="0" y="2" rx="4" ry="4" style={{ fill: "none", strokeWidth: "3", stroke: "#4D84B8" }} />
                            </svg>
                            <p class="payTitle payTitle3">PayMe/FPS</p>
                        </div>
                    </div>

                </div>
            </section>

            <SNS />

            <Footer />
        </div>
    )
}