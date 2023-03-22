import React from "react";

import Header from "../Components/Header.component";
import banner_img from "../assets/images/tytforstudents2.png";
import payment_img from "../assets/images/FOOTER-02.png";
import Button from "../Components/Button.component";
import Footer from "../Components/Footer.component";
import "./style.css";

const Home = () => {
    return (
        <>
            <Header />
            <div className="border border-warning banner">
                <img src={banner_img} className="img-fluid" alt="" />
            </div>
            <div className="text-center middle-text">
                <p>What are you looking for?</p>
            </div>
            <Button />
            <div className="text-center middle-text-2">
                <p>Secure and easy payment with wide range of checkout choices</p>
            </div>
            <div className="payment-section">
                <img src={payment_img} className="img-fluid border-bottom" alt="" />
            </div>

            <div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
