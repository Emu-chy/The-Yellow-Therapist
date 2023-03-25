import React from "react";

import Header from "../Components/Header.component";
import banner_img from "../assets/images/tytforstudents2.png";
import payment_img from "../assets/images/FOOTER-02.png";
import Button from "../Components/Button.component";
import Footer from "../Components/Footer.component";
import Animation from "../Components/Animation.component";
import BottomSection from "../Components/Bottom-section.component";
import "./style.css";
import BottomNavbar from "../Components/Bottom-navigation.component";

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
            <Animation />

            <div className="text-center middle-text-2">
                <p>Secure and easy payment with wide range of checkout choices</p>
            </div>
            <div className="payment-section">
                <img src={payment_img} className="img-fluid border-bottom" alt="" />
            </div>

            <BottomSection />
            <BottomNavbar />
            <Footer />
        </>
    );
};

export default Home;
