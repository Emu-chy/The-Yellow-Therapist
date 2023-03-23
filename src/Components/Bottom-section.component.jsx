import React, { useState } from "react";
import img from "../assets/images/who_are_you.gif";

const BottomSection = () => {
    const [showItemOne, setShowItemOne] = useState(false);
    const [showItemTwo, setShowItemTwo] = useState(false);
    const [showItemThree, setShowItemThree] = useState(false);

    const toggleItem = () => {
        setShowItemOne(!showItemOne);
    };
    const toggleItem_2 = () => {
        setShowItemTwo(!showItemTwo);
    };
    const toggleItem_3 = () => {
        setShowItemThree(!showItemThree);
    };
    return (
        <div>
            <div className="footer-container">
                <p className="paragraph-1">About TYT</p>
                <p className="lh-1" style={{ fontSize: "11px", marginRight: "95px" }}>
                    The Yellow Therapist is an integrated platform that aspires to uplift the
                    existing state of mental health services of Bangladesh. Removing as many
                    obstacles as possible between the one who needs help and the one who can
                    provide- is what we are striving for. In our platform, the therapists and the
                    ones who need the therapy can easily get in touch with each other. At the end of
                    the day, it's the connection that will bring positive outcomes. We are
                    relentlessly working for a better tomorrow where no soul suffers, where every
                    heart is at peace.
                </p>
            </div>
            <div className="mt-5 drop-down-link">
                <h5>Questions maybe circling in your mind:</h5>

                <ul>
                    <li>
                        <u onClick={toggleItem}>
                            Yellow therapist reminds me of yellow journalists, why yellow?
                        </u>
                        {showItemOne && (
                            <p className="lh-1">
                                As you could guess, we get that a lot. But we chose yellow because
                                yellow is famously the happiest color, yellow is the symbol of
                                happiness. So the therapists work here are yellow therapists in the
                                best possible way, far from yellow journalists. So, no worries.
                                Let's spread happiness.
                            </p>
                        )}
                    </li>
                </ul>
                <ul>
                    <li>
                        <u onClick={toggleItem_2}>
                            This web design makes me sad, why is it so dull? Or, I don't like the
                            design. Or, did you not pay your web designer?
                        </u>
                        {showItemTwo && (
                            <p className="lh-1">
                                We are really sorry that you felt that way. But to assure you, this
                                is not our final design. We tend to bring the platform to the public
                                as fast as possible, so we had no choice but to find perfection in
                                the imperfect, just for now. And we are working relentlessly to make
                                the platform better and better. Thanks for being with us.
                            </p>
                        )}
                    </li>
                </ul>
                <ul>
                    <li>
                        <u onClick={toggleItem_3}>Wait a minute, who are you people?</u>
                        {showItemThree && (
                            <div>
                                <img src={img} alt="" className="img-fluid mt-2" />
                            </div>
                        )}
                    </li>
                </ul>
            </div>
            <div className="mb-5">
                <button className="side-button-1">RUMUNA</button>
                <button className="side-button-2">TYT Vent</button>
            </div>
        </div>
    );
};

export default BottomSection;
