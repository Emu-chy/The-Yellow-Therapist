import React, { useState, useEffect } from "react";

const BottomNavbar = () => {
    const [show, setShow] = useState(false);
    const controlNavbar = () => {
        if (window.scrollY < 1650) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, []);

    return (
        <>
            {show && (
                <div className="d-flex justify-content-center fixed-bottom Bottom-Nav">
                    <div className="mx-5 icons">
                        <i className="bi bi-people-fill mx-4"></i>
                        <br />
                        <small> Therapist</small>
                    </div>
                    <div className="mx-5 icons">
                        <i className="bi bi-box-arrow-in-right mx-2"></i>
                        <br />
                        <small>Login</small>
                    </div>
                    <div className="mx-5 icons">
                        <i className="bi bi-person-plus-fill mx-3"></i>
                        <br />
                        <small> SignUp</small>
                    </div>
                    <div className="mx-5 icons">
                        <i className="bi bi-chevron-up mx-2"></i>
                        <br />
                        <small>Menu</small>
                    </div>
                </div>
            )}
        </>
    );
};

export default BottomNavbar;
