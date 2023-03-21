import React, { useState, useEffect } from "react";
import moment from "moment/moment";

export const TimeAndDate = () => {
    var [time, setTime] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setTime(new Date()), 1000);
        return function cleanup() {
            clearInterval(timer);
        };
    });

    const currentDate = moment().format("ddd, D MMM, YYYY");

    return (
        <div className="text-center mt-3 me-5" style={{ fontSize: "10px" }}>
            <small className="">{time.toLocaleTimeString()}</small>
            <br />
            <small className="">{currentDate}</small>
            <br />
            <small>Guest User</small>
        </div>
    );
};

export default TimeAndDate;
