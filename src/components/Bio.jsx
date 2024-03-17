import React from "react";

const Bio = () => {
    return (
        <div className="bio-container w-50 m-auto p-4">
            <div className="bio-image">
                <img
                    src="https://avatars.githubusercontent.com/u/115128873?v=4"
                    alt="Profile"
                    className="img-fluid"
                />
            </div>
            <div className="bio-text">
                <h2>About Me</h2>
                <p>
                    Hi there! I'm Ganga Singh, a passionate developer with a love for
                    clean code and creative solutions. I specialize in Full stack web development.
                    When I'm not coding, you'll find me travelling, playing video games.
                </p>
            </div>

        </div>
    );
};

export default Bio;
