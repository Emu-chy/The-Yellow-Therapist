import React from "react";

import Header from "../Components/Header.component";
import banner_img from "../assets/images/tytforstudents2.png";
import payment_img from "../assets/images/FOOTER-02.png";
import Button from "../Components/Button.component";

const Home = () => {
    return (
        <>
            <Header />

            <div className="border border-warning " style={{ margin: "35px 60px 60px 60px" }}>
                <img src={banner_img} className="img-fluid" alt="" />
            </div>
            <div
                className="text-center"
                style={{ fontSize: "22px", fontWeight: "bold", color: "#5F6368" }}
            >
                <p>What are you looking for?</p>
            </div>
            <Button />
            <div
                className="text-center"
                style={{
                    marginTop: "45px",
                    fontSize: "17px",
                    fontWeight: "bold",
                    color: "#5F6368y",
                }}
            >
                <p>Secure and easy payment with wide range of checkout choices</p>
            </div>
            <div style={{ margin: "0px 65px 60px 75px" }}>
                <img src={payment_img} className="img-fluid border-bottom" alt="" />
            </div>
        </>
    );
};

export default Home;
