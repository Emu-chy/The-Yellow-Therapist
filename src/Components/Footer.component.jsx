import React, { useState } from "react";
import img from "../assets/images/who_are_you.gif";

const Footer = () => {
    return (
        <>
            <div className="text-center fs-6 text-secondary mb-3" style={{ marginTop: "200px" }}>
                <small>&#169; The Yellow Therapist | All rights reserved</small>
                <br />
                <small>Terms and Conditions | Privacy Policy | Contact us</small>
            </div>
        </>
    );
};

export default Footer;
