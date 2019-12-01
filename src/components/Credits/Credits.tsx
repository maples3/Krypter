import React from "react";
import './Credits.scss';

const Credits: React.FunctionComponent = () => {
    return <div className="Credits">
        <p>Created by <a className="name" href="https://github.com/maples3">Anthony Mapes</a> for <span className="course">CSC 483 (Cryptology)</span> at <span className="university">Northern Kentucky University</span>.</p>
    </div>;
};

export default Credits;
