import React, { useState } from "react";
import "./form.css";

import color from "../Components/color";

import NavBar from "../Components/navbar";
import NavBarOpen from "../Components/navbarOpen";

import SNS from "../Components/SNS";

import Footer from "../Components/footer";


export default function Form() {

    const [isNavBarOpen, setIsNavBarOpen] = useState(false);

    const toggleNavBar = () => {
        setIsNavBarOpen(!isNavBarOpen)
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [item, setItem] = useState("");
    const [item2, setItem2] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [link, setLink] = useState("");
    const [item3, setItem3] = useState("");
    const [message, setMessage] = useState("");

    //If item value !== "others", add the class "disable", else the class will be ""
    const disable = item !== 'others' ? 'disable' : '';

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://www.formbackend.com/f/2d2188e153c31cbe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ name, email, item, item2, link, item3, message }),
        })
            .then((response) => {
                if (response.status === 422) {
                    throw new Error("Validation error");
                } else if (!response.ok) {
                    throw new Error("Something went wrong");
                }

                return response.json();
            })
            .then(data => {
                // You can even use `data` here. Access `data.submission_text`, `data.values` etc.
                setSuccessMessage("Form submitted successfully");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    return (
        <div>

            <NavBar toggleNavBar={toggleNavBar} />
            <NavBarOpen isVisible={isNavBarOpen} />

            {/*Form*/}
            <div id="form">
                {successMessage.length === 0 && <form onSubmit={handleSubmit} id="formContainer">
                    <div class="grid1">
                        <label htmlFor="name">Name</label><label htmlFor="name" style={{ color: "red" }}> *</label>
                        <input type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div class="grid2">
                        <label htmlFor="email">Email</label><label htmlFor="email" style={{ color: "red" }}> *</label>
                        <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div class="grid3">
                        <label htmlFor="item">Item</label><label htmlFor="item" style={{ color: "red" }}> *</label>
                        <select name="item" id="item" required onChange={(e) => setItem(e.target.value)}>
                            <option value="headshot">Headshot</option>
                            <option value="waistUp">Waist Up</option>
                            <option value="fullBody">Full Body</option>
                            <option value="illustration">Illustration</option>
                            <option value="others">{`Others (Please specify)`}</option>
                        </select>
                    </div>

                    <div class="grid4">
                        <label class={disable} htmlFor="item2">*</label>
                        <input class={disable} id="item2" name="item2" placeholder="Please state" required onChange={(e) => setItem2(e.target.value)} />
                    </div>

                    <div class="grid5">
                        <label htmlFor="link">Link</label><label htmlFor="link" style={{ color: "red" }}> *</label>
                        <input type="text" id="link" name="link" placeholder="Google drive or website of character information" required onChange={(e) => setLink(e.target.value)} />
                    </div>

                    <div class="grid6">
                        <label htmlFor="item3">Item</label><label htmlFor="item3" style={{ color: "red" }}> *</label>
                        <select name="item3" id="item3" required onChange={(e) => setItem3(e.target.value)}>
                            <option value="paypal">Paypal</option>
                            <option value="bankTransaction">Bank Transaction</option>
                            <option value="payMe">PayMe</option>
                            <option value="FPS">FPS</option>
                        </select>
                    </div>

                    <div class="grid7">
                        <label htmlFor="message">Message</label>
                        <input type="text" id="message" name="message" onChange={(e) => setMessage(e.target.value)} />
                    </div>

                    <button style={{ backgroundColor: `${color.accent}`, color: `${color.background}`, border: "none" }} type="submit" class="grid8">SUBMIT</button>
                </form>}

                {successMessage.length > 0 && <p>{successMessage}</p>}
            </div>

            <SNS />

            <Footer />

        </div>

    )
}