import React from "react";
import logo from "../assets/images/new_tyt_logo_kinda_yellow.png";
import TimeAndDate from "./TimeAndDate.component";

const Header = () => {
    return (
        <div className="mx-5 mt-3">
            <nav className="navbar fixed-top pt-3 px-5">
                <div className="container-fluid">
                    <div className="d-flex flex-column">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="" />
                        </a>
                        <small className="nav-text">Because yellow is the happiest color.</small>
                    </div>
                    <TimeAndDate />
                </div>
            </nav>
        </div>
    );
};

export default Header;
