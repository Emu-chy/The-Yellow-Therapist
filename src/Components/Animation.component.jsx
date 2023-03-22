import React from "react";
import Lottie from "lottie-react";

import patnershipAnim from "../animation/partnership.json";
import stressedWomenAnim from "../animation/stressed-women.json";
import psychoTherapyAnim from "../animation/psychotherapy.json";

const Animation = () => {
    return (
        <>
            <div class="container animation">
                <div class="row">
                    <div class="col">
                        <div className="lottie-img-1">
                            <Lottie animationData={patnershipAnim} />
                        </div>
                    </div>
                    <div class="col">
                        <div className="anim-text-contianer-1 mt-3">
                            <h5>A bridge between...</h5>
                            <p className="lh-1">
                                A platform serving both of who seeks professional help for their
                                mental well being and the professional therapists who are always
                                ready to help. We're providing a smooth bridge between these two.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div className="anim-text-contianer-2 mt-3">
                            <h5>those who need help...</h5>
                            <p className="lh-1">
                                Something ails? Hey, seeking help is the most humane thing we can
                                do. It's not always easy on our own. This is the place where you get
                                the proper help you need.
                            </p>
                        </div>
                    </div>

                    <div class="col">
                        <div className="lottie-img-2">
                            <Lottie animationData={stressedWomenAnim} />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div className="lottie-img-1">
                            <Lottie animationData={psychoTherapyAnim} />
                        </div>
                    </div>
                    <div class="col">
                        <div className="anim-text-contianer-1 mt-3">
                            <h5>and those who can provide.</h5>
                            <p className="lh-1">
                                Are you a professional therapist? We're providing a structured
                                platform to reach out to those who need your help. An independant
                                platform to work on your own schedule and demand.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Animation;
