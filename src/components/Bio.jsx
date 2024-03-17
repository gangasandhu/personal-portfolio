import React from "react";
import profile from '../assets/profile.jpg'
const Bio = () => {
    return (
        <div id="bio" className="row bio-container m-auto mt-4 mb-4 p-4" style={{width: "60%"}}>
  
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-4 d-flex flex-column justify-content-center">
                <h2 className="h1">Ganga Singh</h2>
                <p>
                    Hi there! I'm a passionate developer with a love for
                    clean code and creative solutions. I specialize in Full stack web development.
                    When I'm not coding, you'll find me travelling, playing video games.
                </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-end align-items-center">
                <img
                    // src="https://avatars.githubusercontent.com/u/115128873?v=4"
                    src={profile}
                    alt="Profile"
                    className="img-fluid w-75 m-auto"
                />
            </div>

        </div>
    );
};

export default Bio;
