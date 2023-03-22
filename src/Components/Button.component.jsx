import React from "react";

const Button = () => {
    return (
        <div className="d-flex justify-content-center">
            <button
                type="button"
                className="btn btn-outline-warning mx-4 border border-warning border-3 "
            >
                I need a therapist
            </button>
            <span className="mt-2">or,</span>
            <button
                type="button"
                className="btn btn-outline-warning active mx-4 border border-warning border-3 "
            >
                I am a Therapist
            </button>
        </div>
    );
};

export default Button;
