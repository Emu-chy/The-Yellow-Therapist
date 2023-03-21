import React from "react";
import logo from "../assets/new_tyt_logo_kinda_yellow.png";
import TimeAndDate from "./TimeAndDate.component";

const Header = () => {
    return (
        <div className="d-flex justify-content-between mx-5 mt-3">
            <nav className="nav">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" />
                    </a>
                    <br />
                    <small style={{ color: "orange", fontSize: "9px" }}>
                        Because yellow is the happiest color.
                    </small>
                </div>
            </nav>
            <TimeAndDate />
        </div>
    );
};

export default Header;
